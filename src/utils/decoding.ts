export type AssetMetadata = {
    name: string
    description: string
    external_url: string
    image: string
    attributes: [AssetAttribute]
}

export type AssetAttribute = {
    trait_type: string
    value: any
}

export function decodeRendererV1(data: string): AssetMetadata {
    const payload = window.atob(data.split(',')[1])
    const decoded = JSON.parse(payload)
    return decoded as AssetMetadata
}
