import React, { useEffect, useContext, useState, useCallback } from 'react'

import { useWeb3React } from '@web3-react/core'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'

import { ContractState } from '../utils/contract'
import { getContractState } from '../utils/contract'
import { useEagerWeb3 } from '../hooks/useEagerWeb3'
import { injected } from '../utils/connectors'
import Abi from '../abi/MemeNumbersAbi.json'
import Config from '../config'

export const enum State {
    EagerConnecting = 'EagerConnecting',
    AwaitingConnect = 'AwaitingConnect',
    ActivatingConnector = 'ActivatingConnector',
    ContractUnavailable = 'ContractUnavailable',
    Ready = 'Ready',
}

const initialState = { state: State.EagerConnecting }

interface ContextData {
    state: State
    chainId?: number
    contractAddress?: string
    contract?: Contract
}

// separate the contract state from the top level setup to prevent unecessary rendering
type Context = [ContextData, ContractState?]

const ContractContext = React.createContext<Context>([initialState, undefined])

const useContract = () => {
    return useContext(ContractContext)
}

// #FIXME this component is a little too messy/ugly and doesn't wrap cleanly due
// to using the react-web3 library.  We could probably do better using our own web3 state
// machine (xstate or redux).  Using context for simplicity
export const ContractProvider: React.FC<{}> = ({ children }) => {
    const [activatingConnector, setActivatingConnector] = useState<any>()
    const [state, setState] = useState<ContextData>(initialState)
    const [contractState, setContractState] = useState<ContractState>()

    const didEagerConnect = useEagerWeb3()
    const {
        connector,
        library,
        account,
        chainId,
        active,
        // activate,
    } = useWeb3React<Web3Provider>()

    console.log(library, chainId, active)
    // console.log(`eager ${didEagerConnect}`)

    // handle logic to recognize the connector currently being activated
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            console.log('setting undefined')
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const activateFn = useCallback(() => {}, [activatingConnector, connector])

    useEffect(() => {
        if (!active || !chainId || !library) {
            // After attempting eager connection for already approved accounts and still failing,
            // we need user interaction to connect the wallet
            if (didEagerConnect) {
                setState((prev) => ({ ...prev, state: State.AwaitingConnect }))
            }
            return
        }

        //handle contract change on first init or network selection
        if (state.chainId && chainId === state.chainId) return

        //cleanup previous contract listeners
        if (state.contract) {
            library.removeAllListeners('poll')
        }

        const config = Config(chainId)
        if (!config.contractAddress) {
            setState({ state: State.ContractUnavailable })
            return
        }

        // #TODO listen for changes on a contract address
        const contract = new Contract(
            config.contractAddress,
            Abi,
            library.getSigner()
        )
        setState({
            state: State.Ready,
            chainId,
            contractAddress: config.contractAddress,
            contract: contract,
        })

        // #HACK in debug testnet, the blocks only generate on new transactions
        ;(async () => {
            try {
                let currentState = await getContractState(contract)
                setContractState(currentState)

                library.on('poll', () => {
                    ;(async () => {
                        try {
                            let currentState = await getContractState(contract)
                            setContractState(currentState)
                        } catch (e) {
                            alert(e)
                        }
                    })()
                })
            } catch (e) {
                alert(e)
            }
        })()

        // #NOTE 'block' isn't working?  No idea why.  Hacking with Poll event for now
        // remove listener when the component is unmounted
        return () => {
            library.removeAllListeners('poll')
        }
    }, [state, library, chainId, account])

    return (
        <ContractContext.Provider value={[state, contractState]}>
            {children}
        </ContractContext.Provider>
    )
}

export default useContract
