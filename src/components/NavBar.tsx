import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import {
    Web3ReactProvider,
    useWeb3React,
    UnsupportedChainIdError,
} from '@web3-react/core'
import {
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import { Web3Provider } from '@ethersproject/providers'
import { formatEther } from '@ethersproject/units'

import { Spinner } from './Spinner'
import { injected } from '../utils/connectors'
import { useEagerWeb3 } from '../hooks/useEagerWeb3'

const Nav = styled.nav`
    max-width: 56em;
    margin: 0 auto;
    padding: 0.4em;
`

const Ul = styled.ul`
    display: flex;
    padding: 0;
`

const Li = styled.li`
    display: block;
    padding: 0.4em;
`

// Note that styled-components lets you use SCSS syntax
const A = styled.a`
    &:hover {
        color: blue;
    }
`

//TODO handle some page state if the provider isn't successful
const NavBar = () => {
    const [activatingConnector, setActivatingConnector] = useState<any>()
    const context = useWeb3React<Web3Provider>()
    const didEager = useEagerWeb3()
    const {
        connector,
        library,
        chainId,
        account,
        activate,
        deactivate,
        active,
        error,
    } = context

    // handle logic to recognize the connector currently being activated
    useEffect(() => {
        if (activatingConnector && activatingConnector === connector) {
            console.log('setting undefined')
            setActivatingConnector(undefined)
        }
    }, [activatingConnector, connector])

    const currentConnector = injected
    const activating = currentConnector === activatingConnector
    const connected = currentConnector === connector
    const disabled = !!activatingConnector
    const ready = connected && active

    // const disabled =
    //     !triedEager || !!activatingConnector || connected || !!error
    if (error) alert(error.toString())

    return (
        <Nav>
            <Ul>
                <Li>
                    <Link href="/" passHref>
                        <A>Home</A>
                    </Link>
                </Li>
            </Ul>
            <button
                style={{
                    height: '3rem',
                    borderRadius: '1rem',
                    borderColor: activating
                        ? 'orange'
                        : connected
                        ? 'green'
                        : 'unset',
                    cursor: disabled ? 'unset' : 'pointer',
                    position: 'relative',
                }}
                disabled={disabled}
                key="injected"
                onClick={() => {
                    setActivatingConnector(currentConnector)
                    activate(injected)
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'black',
                        margin: '0 0 0 1rem',
                    }}
                >
                    {activating && (
                        <Spinner
                            color={'black'}
                            style={{ height: '25%', marginLeft: '-1rem' }}
                        />
                    )}
                </div>
                {ready ? 'Connected' : 'Connect Wallet'}
            </button>
        </Nav>
    )
}

export default NavBar
