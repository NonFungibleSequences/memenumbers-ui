import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import useContract, { State as ContractState } from '../hooks/useContract'
import { Spinner } from './Spinner'
import { injected } from '../utils/connectors'
import { Button } from '../components'

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

// const Button = styled.button`
//     height: '3rem';
//     border-radius: '1rem';
// `

//TODO handle some page state if the provider isn't successful
const NavBar = () => {
    const { activate, error } = useWeb3React<Web3Provider>()
    const [{ state }, _unused] = useContract()

    // const currentConnector = injected
    // const activating = currentConnector === activatingConnector
    // const connected = currentConnector === connector
    // const disabled = !!activatingConnector
    // const ready = connected && active

    // const disabled =
    //     !triedEager || !!activatingConnector || connected || !!error
    const ready = state === ContractState.Ready
    if (error) console.log(error)

    return (
        <Nav>
            <Ul>
                <Li>
                    <Link href="/" passHref>
                        <A>MemeNumbers</A>
                    </Link>
                </Li>
            </Ul>

            <Button
                disabled={ready}
                key="connect"
                onClick={() => {
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
                    {state === ContractState.ActivatingConnector && (
                        <Spinner
                            color={'black'}
                            style={{ height: '25%', marginLeft: '-1rem' }}
                        />
                    )}
                </div>
                {ready ? 'Connected' : 'Connect Wallet'}
            </Button>
        </Nav>
    )
}

export default NavBar
