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
    console.log('querying state...')
    //#FIXME auctionStarted and getForSale doesn't need to be loaded all the time
    const [auctionStarted, price, sale] = await Promise.all([
        contract.auctionStarted(),
        contract.currentPrice(),
        contract.getForSale(),
    ])

    const availability: boolean[] = await Promise.all(
        sale.map((x: BigNumber) => {
            return contract.isForSale(x)
        })
    )

    const forSale: Item[] = sale.map((number: BigNumber, i: number) => ({
        number,
        isAvailable: availability[i],
    }))

    return {
        auctionStarted,
        price,
        forSale,
    }
}
