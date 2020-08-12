import * as React from 'react'
import styled from '@emotion/styled'

import logo from "../assets/images/logo.png"

const StyledImg = styled.img`
    width: 100%
`

type Props = {
    className?: string
    vertical?: boolean
}

const Logo: React.FC<Props> = ({className}) => {

    return <StyledImg className={className} src={logo} alt="Logo" />
}

export default Logo
