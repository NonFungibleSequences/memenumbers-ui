import { useState } from 'react'

import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

import { Submit, LongInput, Field } from '../components'

interface OwnerCheckProps {
    contract: Contract
    account?: string | null
}

const OwnerCheck: React.FC<OwnerCheckProps> = ({ account, contract }) => {
    const [num, setNum] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        try {
            let res = await contract.ownerOf(BigNumber.from(num))
            let isMe = account && account === res
            setStatus(`${num} is owned by: ${res}${isMe ? ' (you!)' : ''}`)
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
                <Submit disabled={num === ''} value="Check" />
            </form>
            <p>{status}</p>
        </div>
    )
}

export default OwnerCheck
