import moment from 'moment'
import styled from 'styled-components'

import { formatEther } from '@ethersproject/units'

import { ContractState } from '../utils/contract'
import { Field, Value } from '../components'

interface DutchAuctionProps {
    contractState: ContractState
    onSelect: (name: string) => void
}

const AuctionItem: React.FC<DutchAuctionProps> = ({
    contractState: { auctionStarted, price, forSale },
    onSelect,
}) => {
    const endTime = moment
        .unix(auctionStarted.toNumber())
        .add(moment.duration(1, 'hour')) //#HACK we can query this as a setting
    const minutesLeft = Math.max(0, endTime.diff(moment(), 'minute'))

    const batch = forSale.map((x) => {
        const num = x.number.toString()
        return (
            <>
                <Num
                    key={num}
                    onClick={() => {
                        if (x.isAvailable) onSelect(num)
                    }}
                >
                    {x.isAvailable ? num : <del>{num}</del>}
                </Num>{' '}
            </>
        )
    })

    return (
        <div>
            <Field>Time Left:</Field>
            <Value>{minutesLeft} minute(s)</Value>
            <Field>Price:</Field>
            <Value>{formatEther(price)}</Value>
            <Field>For Sale:</Field>
            {batch}
        </div>
    )
}

const Num = styled.div`
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;

    color: rgba(166, 250, 255, 1);
    font-family: Pangolin;
    font-weight: Regular;
    font-size: 36px;
    opacity: 1;

    &:hover {
        opacity: 0.4;
    }
`

export default AuctionItem
