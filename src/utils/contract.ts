import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'

export interface ContractState {
    auctionStarted: BigNumber
    price: BigNumber
    forSale: Item[]
}

interface Item {
    number: BigNumber
    isAvailable: boolean
}

export async function getContractState(
    contract: Contract
): Promise<ContractState> {
    //#TODO call this in parallel
    console.log('querying state...')
    //#FIXME auctionStarted and getForSale doesn't need to be loaded all the time
    const auctionStarted = await contract.auctionStarted()
    const price = await contract.currentPrice()
    const sale = await contract.getForSale()

    const forSale: Item[] = []
    for (var i = 0; i < sale.length; i++) {
        const number = sale[i]
        const isAvailable = await contract.isForSale(number)
        forSale.push({ number, isAvailable })
    }

    return {
        auctionStarted,
        price,
        forSale,
    }
}
