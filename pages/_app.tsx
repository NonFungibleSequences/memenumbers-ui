import type { AppProps } from 'next/app'
import type { Page } from '../src/types/PageComponent'
import { Fragment } from 'react'

import '../styles/globals.css'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
    const library = new Web3Provider(provider)
    library.pollingInterval = 3000
    return library
}

type Props = AppProps & {
    Component: Page
}

function MyApp({ Component, pageProps }: Props) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    const Layout = Component.layout ?? Fragment

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </Web3ReactProvider>
    )
}

export default MyApp
