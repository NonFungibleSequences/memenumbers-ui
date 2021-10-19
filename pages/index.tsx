import type { Page } from '../src/types/PageComponent'

import { useState, useEffect, ReactElement } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { useWeb3React } from '@web3-react/core'

import Layout from '../src/components/Layout'
import OwnerCheck from '../src/components/OwnerCheck'
import DutchAuction from '../src/components/DutchAuction'
import Operations from '../src/components/Operations'

import useContract, { State as ContractState } from '../src/hooks/useContract'

const Home: Page = () => {
    const { basePath } = useRouter()
    const { account } = useWeb3React()
    const [{ state, contract }, contractState] = useContract()

    const auctionReady =
        state === ContractState.Ready && contractState && account && contract

    // #FIXME the basepath for the favicon is a hack for ghpages because it is hosted at a
    // specific project path.  Should probably be removed later
    return (
        <div>
            <Head>
                <title>MemeNumbers</title>
                <meta name="description" content="eth" />
                <link
                    rel="icon"
                    href={
                        basePath?.charAt(0) === '/'
                            ? `${basePath}favicon.ico`
                            : '/favicon.ico'
                    }
                />
            </Head>

            <Main>
                {!auctionReady && <Web2 />}

                {auctionReady && (
                    <div>
                        <DutchAuction
                            contractState={contractState}
                            contract={contract}
                            account={account}
                        />

                        <Segment />
                        {contract && <OwnerCheck contract={contract} />}

                        <Segment />
                        {contract && account && (
                            <Operations account={account} contract={contract} />
                        )}
                    </div>
                )}
            </Main>
        </div>
    )
}

Home.layout = Layout

export default Home

const Main = styled.main`
    // background-color: hsl(0deg 0% 10%);
`

const Segment = styled.div`
    width: 100%;
    height: 3px;
    background: rgba(196, 196, 196, 1);
    opacity: 1;
    // position: absolute;
    overflow: hidden;
`

// sad
const Web2 = () => {
    return (
        <div>
            <h1>
                {
                    "You don't have to be a mathematician to have a feel for numbers."
                }
            </h1>

            <p>- John Forbes Nash, Jr.</p>
        </div>
    )
}
