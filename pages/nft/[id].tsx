import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

import { Spinner } from '../../src/components/Spinner'
import AssetRenderer from '../../src/components/AssetRendererV1'
import { decodeRendererV1, AssetMetadata } from '../../src/utils/decoding'

import useContract from '../../src/hooks/useContract'

const Nft: React.FC = () => {
    const [asset, setAsset] = useState<AssetMetadata | null>()
    // const { contract } = useContract()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        ;(async () => {
            // let m = await contract.tokenURI(BigNumber.from(id))
            // m = decodeRendererV1(m)
            // console.log(m)
            // setAsset(m)
        })()
    }, [])

    if (!asset) return <Spinner />

    return <AssetRenderer metadata={asset} />
}

export default Nft
