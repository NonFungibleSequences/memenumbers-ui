import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'

export interface ContractState {
    auctionStarted: BigNumber
    price: BigNumber
    forSale: BigNumber[]
}

export async function getContractState(
    contract: Contract
): Promise<ContractState> {
    console.log('querying contract...')
    //#FIXME auctionStarted and getForSale doesn't need to be loaded all the time
    const [auctionStarted, price, forSale] = await Promise.all([
        contract.auctionStarted(),
        contract.currentPrice(),
        contract.getForSale(),
    ])

    return {
        auctionStarted,
        price,
        forSale,
    }
}
