const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/** @type {import('next').NextConfig} */
module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            reactStrictMode: true,
        }
    }

    return {
        reactStrictMode: true,
        basePath: '/memeonacci-ui',
        assetPrefix: '/memeonacci-ui/',
    }
}
