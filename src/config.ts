export const MAINNET = 1
export const ROPSTEN = 3
export const KOVAN = 42
export const RINKEBY = 4
export const AMINO = 31337
export const GETH_DEV = 1337
export const supportedChains = [
    MAINNET,
    ROPSTEN,
    KOVAN,
    RINKEBY,
    AMINO,
    GETH_DEV,
]

type Config = {
    contractAddress: string
}

const config = {
    mainnet: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
    ropsten: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
    kovan: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
    rinkeby: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
    amino: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
    gethDev: {
        contractAddress: '0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca',
    },
}

export default function Configure(chainId: number): Config {
    switch (chainId) {
        case MAINNET:
            return config.mainnet
        case ROPSTEN:
            return config.ropsten
        case KOVAN:
            return config.kovan
        case RINKEBY:
            return config.rinkeby
        case AMINO:
            return config.amino
        case GETH_DEV:
            return config.gethDev
        default:
            throw new Error(`unsupported chain id: ${chainId}`)
    }
}
