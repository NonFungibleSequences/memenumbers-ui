import { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

import { injected } from '../utils/connectors'

export function useEagerWeb3() {
    const { activate, active } = useWeb3React()
    const [tried, setTried] = useState(false)

    useEffect(() => {
        ;(async () => {
            const isAuthorized = await injected.isAuthorized()
            console.log(`authorized: ${isAuthorized}`)
            if (isAuthorized) {
                try {
                    await activate(injected, undefined, true)
                } catch (e) {
                    console.log(`eager activation failed: ${e}`)
                }
            }
            setTried(true)
        })()
    }, [])

    useEffect(() => {
        if (!tried && active) {
            setTried(true)
        }
    }, [tried, active])

    return tried
}
