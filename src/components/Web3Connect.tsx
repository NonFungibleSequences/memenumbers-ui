import React from 'react'
import styled from 'styled-components'

import useContract, { State as ContractState } from '../hooks/useContract'
import { Button } from './'
import { RINKEBY } from '../config'

const P = styled.p`
    padding: 10px;
`

const Web3Connect: React.FC = () => {
    const [{ state, account, chainId }, { activate }] = useContract()

    const ready = state === ContractState.Ready
    const activating = state === ContractState.ActivatingConnector
    const buttonContent = ready
        ? shorten(account)
        : activating
        ? 'Connecting'
        : 'Connect Wallet'

    return (
        <>
            {chainId && chainId === RINKEBY ? <P>(Rinkeby)</P> : null}

            <Button
                disabled={ready || activating}
                key="connect"
                onClick={() => {
                    activate()
                }}
            >
                {buttonContent}
            </Button>
        </>
    )
}

function shorten(address: string | null | undefined) {
    if (!address) return ''
    return address.slice(0, 5) + '...' + address.slice(-2)
}

export default Web3Connect
