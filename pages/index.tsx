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
import Operations from '../src/components/Operations'

import { getContractState } from '../src/utils/contract'
import Abi from '../src/abi/MemeNumbersAbi.json'
import Config from '../src/config'

//https://ethereum.stackexchange.com/questions/94601/trouble-with-web3-eth-contract-abi-usage-with-typescript

const Home: NextPage = () => {
    const { library, account, chainId } = useWeb3React<Web3Provider>()
    const [contract, setContract] = useState<Contract | null>()
    const [state, setState] = useState<any>()

    useEffect(() => {
        //#FIXME we should use a global provider for this
        if (!library || !chainId || contract) return

        const config = Config(chainId)

        // listen for changes on an Ethereum address
        const con = new Contract(
            config.contractAddress,
            Abi,
            library.getSigner()
        )
        setContract(con)

        // #HACK in debug testnet, the blocks only generate on new transactions
        console.log(`RELOADING WITH: ${chainId}`)
        ;(async () => {
            try {
                let currentState = await getContractState(con)
                setState(currentState)

                library.on('poll', () => {
                    ;(async () => {
                        console.log(`RELOADING WITH: ${chainId}`)
                        try {
                            let currentState = await getContractState(con)
                            setState(currentState)
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
            library.removeAllListeners('block')
        }
    }, [library, contract, chainId])

    const auctionReady = library && state

    return (
        <div className={styles.container}>
            <NavBar />
            <Head>
                <title>MemeNumbers</title>
                <meta name="description" content="eth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {!auctionReady && (
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
                        {contract && (
                            <Operations account={account} contract={contract} />
                        )}
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
