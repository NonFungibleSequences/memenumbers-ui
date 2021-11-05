import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { formatEther } from '@ethersproject/units'

import { ContractState } from '../utils/contract'
import { Field, Value, EtherSymbol } from '../components'

const Set = styled.div`
    display: inline-block;
    padding-right: 100px;
`

const Num = styled.span`
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

// const DelNum = styled.del`
//     display: inline-block;
//     vertical-align: top;
//     margin-right: 20px;

//     color: rgba(166, 250, 255, 1);
//     font-family: Pangolin;
//     font-weight: Regular;
//     font-size: 36px;
//     opacity: 1;
// `

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
        const num = x.toString()
        return (
            <React.Fragment key={`auctionItem${num}`}>
                <Num onClick={() => onSelect(num)}>{num}</Num>{' '}
            </React.Fragment>
        )
    })

    return (
        <div>
            <Set>
                <Field>Time Left:</Field>
                <Value>{minutesLeft} minute(s)</Value>
            </Set>
            <Set>
                <Field>Price:</Field>
                <Value>
                    {formatEther(price)} <EtherSymbol />
                </Value>
            </Set>

            <Field>For Sale:</Field>
            {batch}
        </div>
    )
}

export default AuctionItem
