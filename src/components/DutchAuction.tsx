import { useState } from 'react'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseUnits } from '@ethersproject/units'

import { ContractState } from '../utils/contract'
import AuctionItem from './AuctionItem'
import { FieldSet, Field, LongInput, Submit, Button } from '../components'

interface DutchAuctionProps {
    contract: Contract
    contractState: ContractState
    account: string
}

const DutchAuction: React.FC<DutchAuctionProps> = ({
    contract,
    contractState,
    account,
}) => {
    const { forSale, price } = contractState
    const [num, setNum] = useState(trySelectSale(contractState))

    const onSelectNum = (selection: string) => setNum(selection)
    const handleMint = async (evt: any) => {
        evt.preventDefault()
        try {
            let selectedNum = BigNumber.from(num)

            let exists = false
            for (var i = 0; i < forSale.length; i++) {
                if (forSale[i].number.eq(selectedNum)) {
                    exists = true
                    break
                }
            }

            if (!exists) {
                alert('nope')
                return
            }

            let res = await contract.mint(account, selectedNum, {
                value: price,
            })

            console.log('mint result:', res)
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    const handleMintAll = async (evt: any) => {
        evt.preventDefault()
    }

    // #FIXME
    // the bidPrice loop conversion is nasty but BigNumber can't parse decimals and formatEther gives decimals
    // so, figure something out later
    return (
        <div>
            <AuctionItem contractState={contractState} onSelect={onSelectNum} />

            <form onSubmit={handleMint}>
                <FieldSet>
                    <Field>Mint Number:</Field>
                    <LongInput
                        type="text"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                    <Submit value="Mint" />
                    <Button onClick={handleMintAll}>Mint All</Button>
                </FieldSet>
            </form>
        </div>
    )
}

function trySelectSale({ forSale }: ContractState): string | undefined {
    for (var i = 0; i < forSale.length; i++) {
        const item = forSale[i]
        if (item.isAvailable) return item.number.toString()
    }
    return
}

export default DutchAuction
