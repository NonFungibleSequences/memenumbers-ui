import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'

import NavBar from '../src/components/NavBar'
import OwnerCheck from '../src/components/OwnerCheck'
import DutchAuction from '../src/components/DutchAuction'
import { getContractState } from '../src/utils/contract'

import Abi from '../src/abi/MemeNumbersAbi.json'

const CONTRACT_ADDRESS = '0xA2C93D6947Ecd99b9B2cBa8A6091b790bCCC314A'

const Home: NextPage = () => {
    const { library, account } = useWeb3React<Web3Provider>()
    const [contract, setContract] = useState<Contract>()
    const [state, setState] = useState<any>()

    useEffect(() => {
        //#HACK we will use a global provider for this
        if (!library || contract) return
        // listen for changes on an Ethereum address
        const con = new Contract(CONTRACT_ADDRESS, Abi, library.getSigner())
        setContract(con)

        // #Hack in debug testnet, the blocks only generate on new transactions
        ;(async () => {
            let currentState = await getContractState(con)
            setState(currentState)
        })()

        //#NOTE 'block' isn't working?  No idea why.  Hacking with Poll event for now
        library.on('poll', () => {
            ;(async () => {
                let currentState = await getContractState(con)
                setState(currentState)
            })()
        })

        // remove listener when the component is unmounted
        return () => {
            library.removeAllListeners('block')
        }
    }, [library, contract])

    const auctionReady = library && state

    return (
        <div className={styles.container}>
            <NavBar />
            <Head>
                <title>Memeonacci App</title>
                <meta name="description" content="eth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {!library && (
                    <div>
                        <h1 className={styles.title}>
                            {
                                "You don't have to be a mathematician to have a feel for numbers."
                            }
                        </h1>

                        <p className={styles.description}>
                            - John Forbes Nash, Jr.
                        </p>
                    </div>
                )}
                {auctionReady && (
                    <div>
                        <DutchAuction
                            {...state}
                            contract={contract}
                            account={account}
                        />
                        <p />
                        {contract && <OwnerCheck contract={contract} />}
                    </div>
                )}
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://www.discord.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </a>
                <a
                    href="https://www.github.com/NonFungibleSequences"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </footer>
        </div>
    )
}

export default Home
