import { useState } from 'react'
import styled from 'styled-components'
import { ethers, BigNumber } from 'ethers'

import { ContractState } from '../utils/contract'
import AuctionItem from './AuctionItem'
import { Status, Field, LongInput, Submit, Button } from '../components'
import { Result } from '../types'

const Selection = styled.div`
    display: inline-block;
    padding-right: 10px;
`

interface DutchAuctionProps {
    account?: string | null
    contract?: ethers.Contract
    contractState: ContractState
    readyToTransact: () => Promise<boolean>
}

const DutchAuction: React.FC<DutchAuctionProps> = ({
    contract,
    contractState,
    account,
    readyToTransact,
}) => {
    const { forSale, price } = contractState
    const [num, setNum] = useState(trySelectSale(contractState))
    const [result, setResult] = useState<Result>()

    const onSelectNum = (selection: string) => setNum(selection)
    const handleMint = async (evt: any) => {
        evt.preventDefault()
        let ready = await readyToTransact()
        if (!ready || !contract) return

        try {
            let selectedNum = BigNumber.from(num)

            let exists = false
            for (var i = 0; i < forSale.length; i++) {
                if (forSale[i].eq(selectedNum)) {
                    exists = true
                    break
                }
            }

            if (!exists) {
                setResult({
                    message: `MemeNumber is not part of the current batch: ${selectedNum}`,
                })
                return
            }

            let res = await contract!.mint(account, selectedNum, {
                value: price,
            })

            console.log('mint result:', res)
            setResult({
                message: `Mint Transaction Sent, Tx Hash: ${res.hash}`,
            })
        } catch (e) {
            console.log(`tx response: ${e}`)
            setResult({
                message: `Mint Transaction Error: ${(e as Error).toString()}`,
                err: e as Error,
            })
        }
    }

    const handleMintAll = async (evt: any) => {
        evt.preventDefault()
        let ready = await readyToTransact()
        if (!ready || !contract) return

        try {
            let res = await contract!.mintAll(account, {
                value: price,
            })

            console.log('mint all result:', res)
            setResult({
                message: `Mint All Sent, Tx Hash: ${res.hash}`,
            })
        } catch (e) {
            console.log(`tx response: ${e}`)
            setResult({
                message: `Mint All Error: ${(e as Error).toString()}`,
                err: e as Error,
            })
        }
    }

    // #FIXME
    // the bidPrice loop conversion is nasty but BigNumber can't parse decimals and formatEther gives decimals
    // so, figure something out later
    return (
        <div>
            <AuctionItem contractState={contractState} onSelect={onSelectNum} />

            <form onSubmit={handleMint}>
                <Field>Mint Number:</Field>
                <LongInput
                    type="text"
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                />
                <Selection>
                    <Submit value="Mint" />
                </Selection>
                <Selection>
                    <Button onClick={handleMintAll}>Mint All</Button>
                </Selection>
            </form>
            {result && <Status isError={result.err}>{result.message}</Status>}
        </div>
    )
}

function trySelectSale({ forSale }: ContractState): string | undefined {
    return forSale[0] ? forSale[0].toString() : undefined
}

export default DutchAuction
