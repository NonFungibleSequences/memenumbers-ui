import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import styled from 'styled-components'

import Web3Connect from './Web3Connect'
import useWeb3 from '../hooks/useWeb3'
import config, { MAINNET, RINKEBY } from '../config'
import { FrederickaFont } from '../components'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Navigation = styled(Container)`
    ${FrederickaFont}

    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: calc(100% - 20px);
`

const Footer = styled(Navigation)`
    justify-content: flex-end;
`

const NavItem = styled.a`
    color: rgba(255, 255, 255, 1);

    font-size: 20px;
    // margin: 0 15px 20px 0;
    padding: 10px;

    &:hover {
        opacity: 0.6;
    }
`

const FooterNavItem = styled(NavItem)`
    border: 0;
    font-size: 16px;
    margin-bottom: 0;
    padding: 10;
`

const Content = styled.div`
    padding: 50px 10px;
`

const CenterNav = styled(Container)`
    margin: auto;
    justify-content: space-evenly;
    order: 1;
`

const RightNav = styled(Container)`
    justify-content: space-evenly;
    order: 1;
`

const Logo = styled.img`
    margin-bottom: 20px;
    // order: 1;
    width: 340px;
    height: 85px;
`

//#HACK for ghpages, we need to rewrite asset paths
const Layout: React.FC = ({ children }) => {
    // const { basePath } = useRouter()
    const [{ network }, ,] = useWeb3()
    const openSeaLink =
        network === RINKEBY
            ? 'https://testnets.opensea.io/collection/memenumbers-v3'
            : 'https://opensea.io/collection/memenumbers'

    const contractLink =
        network === RINKEBY
            ? `https://rinkeby.etherscan.io/address/${
                  config(RINKEBY).contractAddress
              }`
            : `https://etherscan.io/address/${
                  config(MAINNET).contractAddress
              }#code`

    return (
        <>
            <Navigation>
                <Link href="/" passHref>
                    <a>
                        <Logo alt="MemeNumbers" src={'/assets/logo.png'} />
                    </a>
                </Link>

                <CenterNav>
                    <Link href={openSeaLink} passHref>
                        <NavItem target="_blank" rel="noopener noreferrer">
                            OpenSea
                        </NavItem>
                    </Link>
                    <Link href="/faq" passHref>
                        <NavItem>FAQ</NavItem>
                    </Link>
                </CenterNav>

                <RightNav>
                    <Web3Connect />
                </RightNav>
            </Navigation>

            <Content>{children}</Content>

            <Footer>
                <FooterNavItem
                    href="https://twitter.com/memenumbersnft"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </FooterNavItem>

                <FooterNavItem
                    href="https://discord.gg/EgA3TvxYTv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </FooterNavItem>

                <FooterNavItem
                    href={contractLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contract
                </FooterNavItem>

                <FooterNavItem
                    href="https://www.github.com/NonFungibleSequences"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </FooterNavItem>
            </Footer>
        </>
    )
}

export default Layout
