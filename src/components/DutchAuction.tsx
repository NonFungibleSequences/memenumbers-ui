import { useState } from 'react'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'
import { formatEther, parseUnits } from '@ethersproject/units'

import { ContractState } from '../utils/contract'
import AuctionItem from './AuctionItem'

interface DutchAuctionProps extends ContractState {
    contract: Contract
    account: string
}

const DutchAuction: React.FC<DutchAuctionProps> = ({
    price,
    forSale,
    contract,
    account,
}) => {
    const [num, setNum] = useState('')
    const [bidPrice, setBidPrice] = useState(formatEther(price))

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        try {
            let selectedNum = BigNumber.from(num)
            let selectedPrice = parseUnits(bidPrice, 'ether')

            let exists = false
            for (var i = 0; i < forSale.length; i++) {
                if (forSale[i].eq(selectedNum)) {
                    exists = true
                    break
                }
            }

            if (!exists) {
                alert('nope')
                return
            }

            let res = await contract.mint(account, selectedNum, {
                value: selectedPrice,
            })

            console.log('mint result:', res)
        } catch (e) {
            console.log(`tx response: ${e}`)
        }
    }

    // #FIXME
    // the bidPrice loop conversion is nasty but BigNumber can't parse decimals and formatEther gives decimals
    // so, figure something out later
    return (
        <div>
            <AuctionItem price={price} forSale={forSale} />

            <form onSubmit={handleSubmit}>
                <label>
                    Number:
                    <input
                        type="text"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                    />
                </label>

                <label>
                    Bid Price:
                    <input
                        type="text"
                        value={bidPrice}
                        onChange={(e) => setBidPrice(e.target.value)}
                    />
                </label>
                <input type="submit" value="Bid" />
            </form>
        </div>
    )
}

export default DutchAuction
