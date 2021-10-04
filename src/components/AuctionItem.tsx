import { ContractState } from '../utils/contract'
import { formatEther } from '@ethersproject/units'

const AuctionItem: React.FC<ContractState> = ({ price, forSale }) => {
    return (
        <div>
            <p>forSale: {forSale.map((n: any) => n.toString()).join(', ')}</p>
            <p>price: {formatEther(price)}</p>
        </div>
    )
}

export default AuctionItem
