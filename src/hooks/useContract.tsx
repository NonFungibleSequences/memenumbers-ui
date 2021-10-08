import React, { useEffect, useContext, useState } from 'react'

import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { ContractState } from '../utils/contract'

interface Props extends ContractState {
    chainId: string
    address: string
    contract: Contract
}

const ContractContext = React.createContext<null>(null)

const useContract = () => {
    return useContext(ContractContext)
}

export const ContractProvider: React.FC<{}> = ({ children }) => {
    return (
        <ContractContext.Provider value={null}>
            {children}
        </ContractContext.Provider>
    )
}

export default useContract
