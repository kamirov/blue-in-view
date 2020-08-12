import * as React from 'react'
import styled from '@emotion/styled'

import logo from "../assets/images/logo.png"
import logoMobile from "../assets/images/logo-mobile.png"

const StyledImage = styled.img`
    width: 100%;
    display: block;

    @media (max-width: 700px) {
        display: none !important;
    }
`
const MobileImage = styled.img`
    width: 100%;
    display: none;

    @media (max-width: 700px) {
        display: block;
    }
`

const LogoContainer = styled.div`
    width: 100%;
`

type Props = {
    className?: string
    vertical?: boolean
}

const Logo: React.FC<Props> = ({className}) => {

    return <LogoContainer>
        <StyledImage className={className} src={logo} alt="Logo" />
        <MobileImage className={className} src={logoMobile} alt="Mobile Logo" />
    </LogoContainer>
}

export default Logo
