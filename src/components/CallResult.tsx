import { useState } from 'react'
import { Web3Provider } from '@ethersproject/providers'

function hex_to_ascii(hexStr: any) {
    var hex = hexStr.toString()
    var str = ''
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
    }
    return str
}

interface CallResultProps {
    library: Web3Provider
}

const CallResult: React.FC<CallResultProps> = ({ library }) => {
    const [txId, setTxId] = useState('')
    const [result, setResult] = useState('')

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        // let hash =
        //     '0x2718c951002249d1645bc4c0fe0e3903eaa38781d936b9f560edb6907d2d379d'
        try {
            let tx: any = await library.getTransaction(txId)
            if (!tx) {
                alert('tx not found')
            } else {
                // #HACK, reusing the tx from getTransaction includes conflicting keys
                delete tx['maxFeePerGas']
                delete tx['maxPriorityFeePerGas']

                let code = await library.call(tx, tx.blockNumber)
                let reason = hex_to_ascii(code.substr(138))
                setResult(reason)
            }
        } catch (e) {
            alert(`error: ${e}`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Tx Id:
                    <input
                        type="text"
                        value={txId}
                        onChange={(e) => setTxId(e.target.value)}
                    />
                </label>

                <input type="submit" value="Call" />
            </form>
            <p> Result: {result}</p>
        </div>
    )
}

export default CallResult
