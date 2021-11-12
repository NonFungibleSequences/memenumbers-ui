import { useState, useCallback } from 'react'
import _, { debounce } from 'lodash'

import { ethers, BigNumber } from 'ethers'

import { Status, Button, Select, Submit, LongInput, Field } from '../components'
import { Result } from '../types'
import { addressEquals } from '../utils'

interface Props {
    account?: string
    contract?: ethers.Contract
    readyToTransact: () => Promise<boolean>
}

//#FIXME use debounced query instead of two step button setup/query
const Operations: React.FC<Props> = ({
    account,
    contract,
    readyToTransact,
}) => {
    const [num, setNum] = useState('')
    const [numTwo, setNumTwo] = useState('')
    const [op, setOp] = useState('a')
    const [state, setState] = useState<{
        submitting: boolean
        firstNum: BigNumber
        secondNum: BigNumber
        preview: BigNumber
    } | null>()
    const [result, setResult] = useState<Result>()

    // const [numOwner1, setNumOwner1] = useState(false)
    // const delayedQuery1 = useCallback(
    //     debounce((q: string) => sendQuery(q), 500), // (*)
    //     []
    // )

    // const sendQuery = useCallback(
    //     async (query: string): Promise<any> => {
    //         if (query === '') return

    //         try {
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     },
    //     [pageNum]
    // )

    const handlePreview = async (evt: any) => {
        evt.preventDefault()
        let ready = await readyToTransact()
        if (!ready || !contract || !num || !numTwo) return

        try {
            const firstNum = BigNumber.from(num)
            const secondNum = BigNumber.from(numTwo)
            // FIXME: We should not require ownership here just to try numbers. Perhaps we should just print a warning if you're not the owner and the next txn will fail.
            let res = await contract.operate(firstNum, op, secondNum)
            setState({
                firstNum,
                secondNum,
                preview: res,
                submitting: false,
            })
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    const handleBurn = async (evt: any) => {
        evt.preventDefault()
        let ready = await readyToTransact()
        if (!ready || !contract || !num || !numTwo) return

        try {
            if (!state || state.submitting) return
            const { firstNum, secondNum } = state
            const isOwner = await confirmOwnership(
                contract,
                account!,
                firstNum,
                secondNum
            )
            if (!isOwner) {
                setResult({
                    message: `You do not currently own ${firstNum} and ${secondNum}`,
                    err: new Error('not owned'),
                })
                return
            }

            const res = await contract.burn(account, firstNum, op, secondNum)
            console.log('burn result:', res.toString())
            setResult({
                message: `Op Sent, Tx Hash: ${res.hash}`,
            })
        } catch (e) {
            console.log(`tx response: ${e}`)
            setResult({
                message: `Op Error: ${(e as Error).toString()}`,
                err: e as Error,
            })
        }
    }

    return (
        <div>
            <Field>Burn Ops:</Field>
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
                <Button
                    onClick={(e) => handleBurn(e)}
                    disabled={state.submitting}
                >
                    Confirm Burn into {state.preview.toString()}
                </Button>
            )}
            {result && <Status isError={result.err}>{result.message}</Status>}
        </div>
    )
}

async function confirmOwnership(
    contract: ethers.Contract,
    account: string,
    num1: BigNumber,
    num2: BigNumber
): Promise<boolean> {
    try {
        const checkNum1 = contract.ownerOf(num1)
        const checkNum2 = contract.ownerOf(num2)
        let results = await Promise.all([checkNum1, checkNum2])
        for (var i = 0; i < results.length; i++) {
            if (!addressEquals(results[i], account)) return false
        }
        return true
    } catch (e) {
        console.log(`chain query error: ${e}`)
        return false
    }
}

export default Operations
