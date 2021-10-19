import type { AppProps } from 'next/app'
import type { Page } from '../src/types/PageComponent'

import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { ContractProvider } from '../src/hooks/useContract'

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap");
@import url("https://fonts.googleapis.com/css?family=Pangolin&display=swap");

html * {
	color: rgba(255,255,255,1);
	font-family: Fredericka the Great;
	font-weight: Regular;
}

body {
	background: rgba(51,51,51,1);
}
`

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

    console.log(getLayout)
    console.log(Component)
    console.log(Layout)

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ContractProvider>
                <GlobalStyle />
                <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
            </ContractProvider>
        </Web3ReactProvider>
    )
}

export default MyApp
