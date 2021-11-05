import type { AppProps } from 'next/app'
import type { Page } from '../src/types/PageComponent'

import { Fragment } from 'react'
import { createGlobalStyle } from 'styled-components'

import { Web3Provider } from '../src/hooks/useWeb3'

const GlobalStyle = createGlobalStyle`
html * {
	color: rgba(255,255,255,1);
	// font-family: Fredericka the Great;
	// font-weight: Regular;
}

body {
	background: rgba(51,51,51,1);
}
`

type Props = AppProps & {
    Component: Page
}

function MyApp({ Component, pageProps }: Props) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    const Layout = Component.layout ?? Fragment

    // console.log(getLayout)
    // console.log(Component)
    // console.log(Layout)

    return (
        <Web3Provider>
            <GlobalStyle />
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </Web3Provider>
    )
}

export default MyApp
