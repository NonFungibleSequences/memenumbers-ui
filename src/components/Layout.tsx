import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import styled from 'styled-components'

import Web3Connect from './Web3Connect'
import config, { MAINNET } from '../config'

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Navigation = styled(Container)`
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: calc(100% - 20px);
`

const Footer = styled(Navigation)`
    justify-content: flex-center;
`

const NavItem = styled.a`
    font-size: 20px;
    // margin: 0 15px 20px 0;
    padding: 10px;

    &:hover {
        opacity: 0.6;
    }
`

const FooterNavItem = styled(NavItem)`
    border: 0;
    // font-size: 12px;
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

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Navigation>
                <Link href="/" passHref>
                    <a>
                        <Logo alt="MemeNumbers" src="/assets/logo.png" />
                    </a>
                </Link>

                <CenterNav>
                    <Link
                        href="https://opensea.io/collection/memenumbers"
                        passHref
                    >
                        <NavItem>OpenSea</NavItem>
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
                    href="https://discord.gg/EgA3TvxYTv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Discord
                </FooterNavItem>

                <FooterNavItem
                    href={`https://etherscan.io/address/${
                        config(MAINNET).contractAddress
                    }#code`}
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
//FIXME contract address doesn't change with network, always points to mainnet

export default Layout
