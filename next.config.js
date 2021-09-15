const uriPrefix = process.env.NODE_ENV === 'production' ? '/memeonacci-ui' : ''

module.exports = {
    assetPrefix: uriPrefix,
    basePath: uriPrefix,
    // env: {
    //     linkPrefix: uriPrefix,
    // },
    generateBuildId: async () => 'current',
}
