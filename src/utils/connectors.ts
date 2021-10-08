import { InjectedConnector } from '@web3-react/injected-connector'

import { supportedChains } from '../config'

export const injected = new InjectedConnector({
    supportedChainIds: supportedChains,
})
