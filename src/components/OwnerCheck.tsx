import { useState } from 'react'
import styled from 'styled-components'

import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

import { Submit, LongInput, Field } from '../components'

interface OwnerCheckProps {
    contract: Contract
}

const OwnerCheck: React.FC<OwnerCheckProps> = ({ contract }) => {
    const [num, setNum] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        try {
            let res = await contract.ownerOf(BigNumber.from(num))
            setStatus(`${num} is owned by: ${res}`)
        } catch (e) {
            setStatus(`${num} is available`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field>Availability:</Field>
                <LongInput
                    type="text"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                />
                <Submit value="Check" />
            </form>
            <p>{status}</p>
        </div>
    )
}

export default OwnerCheck
