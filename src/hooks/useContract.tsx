import React, { useEffect, useContext, useState, useCallback } from 'react'

import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { InfuraProvider } from '@ethersproject/providers'

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
    account?: string | null
    contractAddress?: string
    contract?: Contract
    library?: any //<--- huge hack because web3react -_-
}

interface ContextActions {
    activate: () => void // function as property declaration
}

// separate the contract state from the top level setup to prevent unecessary rendering
type Context = [ContextData, ContextActions, ContractState?]

const ContractContext = React.createContext<Context>([
    initialState,
    { activate: () => {} },
    undefined,
])

const useContract = () => {
    return useContext(ContractContext)
}

const defaultProvider = new InfuraProvider(1)
const defaultContract = new Contract(
    Config(1).contractAddress!,
    Abi,
    defaultProvider
)

// #FIXME this component is a little too messy/ugly and doesn't wrap cleanly due
// to using the react-web3 library.  We could probably do better using our own web3 state
// machine (xstate or redux).
// This thing is such a mess, we should use web3modal or something better
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
        activate,
        error,
    } = useWeb3React<Web3Provider>()

    // console.log(library, chainId, `active: ${active}`)
    // console.log(`eager ${didEagerConnect}`)

    // handle logic to recognize the connector currently being activated
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            // console.log(
            //     'setting undefined',
            //     activatingConnector,
            //     connector,
            //     active
            // )
            if (active) {
                // user clicked allow
                setState((prev) => ({
                    ...prev,
                    state: State.AwaitingConnect,
                }))
            }
            if (error) {
                console.error('activating connector error')
            }
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const activateFn = useCallback(() => {
        console.log(state.state)
        if (state.state == State.AwaitingConnect) {
            activate(injected)
            setActivatingConnector(injected)
            setState((prev) => ({
                ...prev,
                state: State.ActivatingConnector,
            }))
        }
    }, [state, activatingConnector, connector])

    useEffect(() => {
        if (!active || !chainId || !library) {
            // After attempting eager connection for already approved accounts and still failing,
            // we need user interaction to connect the wallet
            if (didEagerConnect && state.state === State.EagerConnecting) {
                setState((prev) => ({ ...prev, state: State.AwaitingConnect }))
                ;(async () => {
                    //#HACK temporary query
                    let currentState = await getContractState(defaultContract)
                    setContractState(currentState)
                    setState((prev) => ({
                        ...prev,
                        chainId: 1,
                        contract: defaultContract,
                    }))
                })()
            }
            //user disconnected wallet
            if (state.state === State.Ready) {
                //cleanup
                state.library.removeAllListeners('poll')
                setState((prev) => ({
                    ...prev,
                    state: State.AwaitingConnect,
                    chainId: 1,
                    contract: defaultContract,
                }))
            }
            return
        }

        if (account && state.account && account !== state.account)
            setState((prev) => ({ ...prev, account: account }))

        //handle contract change on first init or network selection
        if (state.chainId && chainId === state.chainId) return

        //cleanup previous contract listeners
        if (state.contract) {
            library.removeAllListeners('poll')
            state.contract.removeAllListeners()
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
            account,
            contractAddress: config.contractAddress,
            contract: contract,
            //#HACK safe a reference to the old library so we can unsub
            library: library,
        })

        // #HACK in debug testnet, the blocks only generate on new transactions
        ;(async () => {
            try {
                let currentState = await getContractState(contract)
                setContractState(currentState)

                contract.on('Refresh', async () => {
                    let currentState = await getContractState(contract)
                    setContractState(currentState)
                })

                library.on('poll', () => {
                    ;(async () => {
                        try {
                            const newPrice = await contract.currentPrice()
                            setContractState(
                                (prev: ContractState | undefined) => {
                                    return prev
                                        ? { ...prev, price: newPrice }
                                        : prev
                                }
                            )
                        } catch (e) {
                            console.log('CONTRACT ERROR')
                        }
                    })()
                })
            } catch (e) {
                console.log(`CONTRACT ERROR: ${e}`)
            }
        })()

        // #NOTE 'block' isn't working?  No idea why.  Hacking with Poll event for now
        // remove listener when the component is unmounted
        return () => {
            library.removeAllListeners('poll')
            if (state.contract) state.contract.removeAllListeners()
        }
    }, [state, library, chainId, account, didEagerConnect])

    return (
        <ContractContext.Provider
            value={[state, { activate: activateFn }, contractState]}
        >
            {children}
        </ContractContext.Provider>
    )
}

export default useContract
