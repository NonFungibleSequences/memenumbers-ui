import styled from 'styled-components'

import { AssetMetadata } from '../utils/decoding'

const ImageContainer = styled.div`
    background: #101010;
`

interface Props {
    metadata: AssetMetadata
}

const AssetRenderer: React.FC<Props> = ({ metadata }) => {
    return (
        <div>
            <ImageContainer>
                <img src={metadata.image} />
            </ImageContainer>
        </div>
    )
}

export default AssetRenderer
