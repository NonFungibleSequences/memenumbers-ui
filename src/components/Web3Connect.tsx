import React from 'react'
import styled from 'styled-components'

import useWeb3 from '../hooks/useWeb3'
import { Button } from './'
import { RINKEBY } from '../config'

const P = styled.p`
    padding: 10px;
`

const Web3Connect: React.FC = () => {
    const [{ address, network, onboard, ens }, { disconnect }] = useWeb3()

    const buttonContent = address
        ? ens
            ? ens.name
            : shorten(address)
        : 'Connect'

    const isConnected = !!address

    return (
        <>
            {network && network === RINKEBY ? <P>(Rinkeby)</P> : null}

            <Button
                disabled={isConnected}
                key="connect"
                onClick={async () => {
                    if (await onboard?.walletSelect())
                        await onboard?.walletCheck()
                }}
            >
                {buttonContent}
            </Button>
            {isConnected && (
                <Button
                    key="disconnect"
                    onClick={async () => {
                        disconnect()
                    }}
                >
                    Disconnect
                </Button>
            )}
        </>
    )
}

function shorten(address: string | null | undefined) {
    if (!address) return ''
    return address.slice(0, 5) + '...' + address.slice(-2)
}

export default Web3Connect
