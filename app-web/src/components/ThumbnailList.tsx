import * as React from 'react'
import styled from '@emotion/styled'
import { colors } from "../theme";


export type Props = {
    className?: string
}

const ThumbnailList: React.FC<Props> = ({className, children}) => <ItemList className={className}>{children}</ItemList>

const ItemList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    align-items: center;

    > * {
        margin: 1rem 0.5rem;
        width: auto;
        border: 2px solid ${colors.primary};

        > div {
            height: 10rem;
        }
    }
`

export default ThumbnailList
