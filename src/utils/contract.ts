import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'

export interface ContractState {
    price: BigNumber
    forSale: [BigNumber]
}

export async function getContractState(
    contract: Contract
): Promise<ContractState> {
    //#TODO call this in parallel
    console.log('querying state...')
    let price = await contract.currentPrice()
    let forSale = await contract.getForSale()

    return {
        price: price,
        forSale: forSale,
    }
}
