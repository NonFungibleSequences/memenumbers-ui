import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useWeb3React } from '@web3-react/core'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther, parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'

import NavBar from '../src/components/NavBar'

import { AbiItem } from 'web3-utils'

import Abi from '../src/abi/MemeNumbersAbi.json'

const CONTRACT_ADDRESS = '0x772B29b3F93DaD79689b53f7dc434558f366dc74'

interface ContractState {
    price: BigNumber
    forSale: [BigNumber]
}

async function getState(contract: any): Promise<ContractState> {
    //#TODO call this in parallel
    console.log('querying state...')
    let price = await contract.currentPrice()
    let forSale = await contract.getForSale()
    // console.log('owner of 9: ', await contract.ownerOf(BigNumber.from(9)))
    return {
        price: price,
        forSale: forSale,
    }
}

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
            let currentState = await getState(con)
            setState(currentState)
        })()

        //#NOTE 'block' isn't working?  No idea why.  Hacking with Poll for now
        library.on('poll', () => {
            ;(async () => {
                let currentState = await getState(con)
                setState(currentState)
            })()
        })

        // remove listener when the component is unmounted
        return () => {
            library.removeAllListeners('block')
            // library.removeAllListeners(toMe)
            // library.removeAllListeners(fromMe)
        }
    }, [library, contract])

    return (
        <div className={styles.container}>
            <NavBar />
            <Head>
                <title>Memeonacci App</title>
                <meta name="description" content="eth" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {
                        "You don't have to be a mathematician to have a feel for numbers."
                    }
                </h1>
                <p className={styles.description}>- John Forbes Nash, Jr.</p>
                {state && (
                    <DutchAuction
                        {...state}
                        contract={contract}
                        account={account}
                    />
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

interface AuctionProps extends ContractState {
    contract: Contract
    account: string
}

const DutchAuction: React.FC<AuctionProps & Contract> = ({
    price,
    forSale,
    contract,
    account,
}) => {
    const [num, setNum] = useState('')
    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        console.log(`Submitting Number ${num}`)
        try {
            console.log(price)
            let res = await contract.mint(account, BigNumber.from(num), {
                value: price.mul(2),
            })
            console.log('mint result:', res)
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    return (
        <div>
            <p>forSale: {forSale.map((n: any) => n.toString()).join(', ')}</p>
            <p>price: {formatEther(price)}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    Buy Number:
                    <input
                        type="text"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Home
