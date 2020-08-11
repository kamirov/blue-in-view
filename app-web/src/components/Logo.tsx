import * as React from 'react'
import styled from '@emotion/styled'

import { Assets } from "../library/assets.module";

const logoVertical = Assets.getMediaUrl('logo-vertical.png')
const logoHorizontal = Assets.getMediaUrl('logo-horizontal.png')

const StyledImg = styled.img`
    width: 100%
`

type Props = {
    className?: string
    vertical?: boolean
}

const Logo: React.FC<Props> = ({className, vertical}) => {

    const logo = vertical ? logoVertical : logoHorizontal

    return <StyledImg className={className} src={logo} alt="Logo" />
}

export default Logo
