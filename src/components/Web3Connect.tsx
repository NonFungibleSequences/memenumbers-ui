import React from 'react'
import styled from 'styled-components'

import useWeb3 from '../hooks/useWeb3'
import { Button } from './'
import { RINKEBY } from '../config'

const P = styled.p`
    padding: 10px;
`

const Web3Connect: React.FC = () => {
    const [{ address, network, onboard }, { ready, disconnect }] = useWeb3()

    const buttonContent = address ? shorten(address) : 'Connect Wallet'
    // ? 'Connecting'
    // : 'Connect Wallet'

    return (
        <>
            {network && network === RINKEBY ? <P>(Rinkeby)</P> : null}

            <Button
                disabled={!!address}
                key="connect"
                onClick={async () => {
                    await onboard?.walletSelect()
                    await onboard?.walletCheck()
                }}
            >
                {buttonContent}
            </Button>
            <Button
                key="disconnect"
                onClick={async () => {
                    onboard?.walletReset()
                }}
            >
                Disconnect
            </Button>
        </>
    )
}

function shorten(address: string | null | undefined) {
    if (!address) return ''
    return address.slice(0, 5) + '...' + address.slice(-2)
}

export default Web3Connect
