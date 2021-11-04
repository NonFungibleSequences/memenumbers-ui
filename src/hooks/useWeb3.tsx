import React, { useEffect, useContext, useState } from 'react'
import { ethers, providers } from 'ethers'
import { API, Wallet, Ens } from 'bnc-onboard/dist/src/interfaces'

import { ContractState, getContractState, updatePrice } from '../utils/contract'
import { initOnboard } from '../utils/initOnboard'
import Abi from '../abi/MemeNumbersAbi.json'
import Config from '../config'

interface ContextData {
    address?: string
    ens?: Ens
    network?: number
    balance?: string
    wallet?: Wallet
    onboard?: API
    contractState?: ContractState
    contract?: ethers.Contract
}

interface ContextActions {
    ready: () => Promise<boolean> // function as property declaration
    disconnect: () => void
}

type Context = [ContextData, ContextActions]

const Web3Context = React.createContext<Context>([
    {},
    {
        ready: async () => {
            return false
        },
        disconnect: () => {},
    },
])

let defaultProvider: providers.JsonRpcProvider = new providers.InfuraProvider(1)
let provider: providers.JsonRpcProvider = defaultProvider
let contract = new ethers.Contract(Config(1).contractAddress!, Abi, provider)
export const Web3Provider: React.FC<{}> = ({ children }) => {
    const [address, setAddress] = useState<string>()
    const [ens, setEns] = useState<Ens>()
    const [network, setNetwork] = useState<number>()
    const [balance, setBalance] = useState<string>()
    const [wallet, setWallet] = useState<Wallet>()
    const [onboard, setOnboard] = useState<API>()
    const [contractState, setContractState] = useState<ContractState>()

    useEffect(() => {
        const onboard = initOnboard({
            address: setAddress,
            ens: setEns,
            network: async (networkId: number) => {
                console.log('network changed: ', networkId)
                contract.removeAllListeners()
                defaultProvider.removeAllListeners()
                defaultProvider = new providers.InfuraProvider(networkId)
                contract = new ethers.Contract(
                    Config(networkId).contractAddress!,
                    Abi,
                    defaultProvider
                )

                ////get contract data and set listener
                //const contractState = await getContractState(contract)
                //contract.on('Refresh', async () => {
                //    let currentState = await getContractState(contract)
                //    setContractState(currentState)
                //})
                //setContractState(contractState)

                // Setup price refresh on defaultProvider
                provider.on('block', async (block) => {
                    console.log(`${networkId} - ${block}!`)
                    try {
                        const [auctionStarted, price] = await updatePrice(
                            contract
                        )
                        setContractState((prev: ContractState | undefined) => {
                            return prev
                                ? { ...prev, auctionStarted, price }
                                : prev
                        })
                    } catch (e) {
                        console.log('CONTRACT ERROR')
                    }
                })
                setNetwork(networkId)
            },
            balance: setBalance,
            wallet: (wallet: Wallet) => {
                if (wallet.provider) {
                    setWallet(wallet)

                    provider = new ethers.providers.Web3Provider(
                        wallet.provider
                    )

                    window.localStorage.setItem('selectedWallet', wallet.name!)
                } else {
                    provider = defaultProvider
                    setWallet(undefined)
                }
            },
        })

        setOnboard(onboard)

        // Get contract data and setup listeners on default contract
        ;(async () => {
            const contractState = await getContractState(contract)
            contract.on('Refresh', async () => {
                let currentState = await getContractState(contract)
                setContractState(currentState)
            })
            setContractState(contractState)
        })()

        // Setup price refresh on defaultProvider
        defaultProvider.on('block', async (block) => {
            try {
                console.log(`mainnet - ${block}!`)
                const [auctionStarted, price] = await updatePrice(contract)
                setContractState((prev: ContractState | undefined) => {
                    return prev ? { ...prev, auctionStarted, price } : prev
                })
            } catch (e) {
                console.log('CONTRACT ERROR')
            }
        })
    }, [])

    // useEffect(() => {
    //     const previouslySelectedWallet = window.localStorage.getItem(
    //         'selectedWallet'
    //     )
    //     if (previouslySelectedWallet && onboard) {
    //         onboard.walletSelect(previouslySelectedWallet)
    //     }
    // }, [onboard])

    async function readyToTransact() {
        if (!provider) {
            //#HACK if provider is set, onboard should be set.
            const walletSelected = await onboard!.walletSelect()
            if (!walletSelected) return false
        }

        return await onboard!.walletCheck()
    }

    const disconnectWallet = () => {
        if (onboard) {
            onboard.walletReset()
            setBalance(undefined)
            setAddress(undefined)
            window.localStorage.removeItem('selectedWallet')
        }
    }

    return (
        <Web3Context.Provider
            value={[
                {
                    address,
                    ens,
                    network,
                    balance,
                    wallet,
                    onboard,
                    contractState,
                    contract,
                },
                { ready: readyToTransact, disconnect: disconnectWallet },
            ]}
        >
            {children}
        </Web3Context.Provider>
    )
}

export default function useWeb3() {
    return useContext(Web3Context)
}