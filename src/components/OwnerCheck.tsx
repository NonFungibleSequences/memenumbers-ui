import { useState } from 'react'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

interface OwnerCheckProps {
    contract: Contract
}

const OwnerCheck: React.FC<OwnerCheckProps> = ({ contract }) => {
    const [num, setNum] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        console.log(`Submitting Number ${num}`)
        try {
            let res = await contract.ownerOf(BigNumber.from(num))
            setStatus(`${num} is owned by: ${res}`)
        } catch (e) {
            setStatus(`${num} is available`)
            console.log(`tx response: ${e}`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    availability:
                    <input
                        type="text"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                </label>
                <input type="submit" value="Check" />
            </form>
            <p>{status}</p>
        </div>
    )
}

export default OwnerCheck
