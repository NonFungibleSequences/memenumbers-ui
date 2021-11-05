import { ethers, BigNumber } from 'ethers'

export interface ContractState {
    auctionStarted: BigNumber
    price: BigNumber
    forSale: BigNumber[]
}

export async function getContractState(
    contract: ethers.Contract
): Promise<ContractState> {
    // console.log('querying contract...')
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

export async function updatePrice(
    contract: ethers.Contract
): Promise<[BigNumber, BigNumber]> {
    return await Promise.all([
        contract.auctionStarted(),
        contract.currentPrice(),
    ])
}
