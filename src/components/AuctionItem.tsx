import { ContractState } from '../utils/contract'
import { formatEther } from '@ethersproject/units'

interface DutchAuctionProps extends ContractState {
    onSelect: (name: string) => void
}

const AuctionItem: React.FC<DutchAuctionProps> = ({
    price,
    forSale,
    onSelect,
}) => {
    const batch = forSale.map((n) => {
        const num = n.toString()
        return (
            <li key={num} onClick={() => onSelect(num)}>
                {n.toString()}
            </li>
        )
    })

    return (
        <div>
            <p>price: {formatEther(price)}</p>
            <ul>{batch}</ul>
        </div>
    )
}

export default AuctionItem
