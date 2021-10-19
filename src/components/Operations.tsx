import { useState } from 'react'

import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

import { Select, Submit, LongInput, Field } from '../components'

async function confirmOwnership(
    contract: Contract,
    account: string,
    num1: BigNumber,
    num2: BigNumber
): Promise<boolean> {
    const checkNum1 = contract.ownerOf(num1)
    const checkNum2 = contract.ownerOf(num2)
    try {
        let results = await Promise.all([checkNum1, checkNum2])
        for (var owner in results) {
            if (owner != account) return false
        }
        return true
    } catch (e) {
        console.log(`chain query error: ${e}`)
        return false
    }
}

interface Props {
    contract: Contract
    account: string
}

const Operations: React.FC<Props> = ({ account, contract }) => {
    const [num, setNum] = useState('')
    const [numTwo, setNumTwo] = useState('')
    const [op, setOp] = useState('a')
    const [state, setState] = useState<{
        submitting: boolean
        firstNum: BigNumber
        secondNum: BigNumber
        preview: BigNumber
    } | null>()

    const handlePreview = async (evt: any) => {
        evt.preventDefault()
        try {
            const firstNum = BigNumber.from(num)
            const secondNum = BigNumber.from(numTwo)
            const isOwner = await confirmOwnership(
                contract,
                account,
                firstNum,
                secondNum
            )
            if (isOwner) {
                let res = await contract.operate(firstNum, op, secondNum)
                setState({
                    firstNum,
                    secondNum,
                    preview: res,
                    submitting: false,
                })
            }
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    const handleBurn = async (evt: any) => {
        evt.preventDefault()
        try {
            if (!state || state.submitting) return
            const { firstNum, secondNum } = state
            const res = await contract.burn(account, firstNum, op, secondNum)
            console.log('burn result:', res.toString())
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    return (
        <div>
            <Field>Ops:</Field>
            <form onSubmit={handlePreview}>
                <LongInput
                    type="text"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                />
                <Select
                    id="ops"
                    name="ops"
                    value={op}
                    onChange={(e) => setOp(e.target.value)}
                >
                    <option value="a">Add</option>
                    <option value="s">Subtract</option>
                    <option value="m">Multiply</option>
                    <option value="d">Divide</option>
                </Select>
                <LongInput
                    type="text"
                    value={numTwo}
                    onChange={(e) => setNumTwo(e.target.value)}
                />
                <Submit value="Preview" />
            </form>
            {state && (
                <button
                    onClick={(e) => handleBurn(e)}
                    disabled={state.submitting}
                >
                    Confirm Burn to {state.preview.toString()}
                </button>
            )}
        </div>
    )
}

export default Operations
