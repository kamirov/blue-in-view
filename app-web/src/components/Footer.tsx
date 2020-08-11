import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby";
import Container from "./Container";
import { dimensions } from "../styles/dimensions";

interface Props {
    className?: string
}

const Footer: React.FC<Props> = ({className}) => {
    return <StyledFooter className={className}>
        <StyledContainer>
            <SocialContainer>
                {/*<span>Follow us:</span>*/}
            </SocialContainer>
            <FooterMenu>
                <FooterMenuLink to={"/"}>About</FooterMenuLink>
                <FooterMenuLink to={"/"}>Terms of Use</FooterMenuLink>
                <FooterMenuLink to={"/"}>Privacy</FooterMenuLink>
            </FooterMenu>
        </StyledContainer>
    </StyledFooter>
}

const SocialContainer = styled.div`
    font-weight: bold;
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`

const FooterMenu = styled.div`
    display: flex;
`

const FooterMenuLink = styled(Link)`
    margin-right: 1rem;
    color: #bbb;
    font-weight: bold;

    &:last-child {
        margin-right: 0;
    }
`

const StyledFooter = styled.footer`
    border-top: 2px solid #eee;
    padding-top: ${dimensions.containerPadding}rem;
    margin-top: ${dimensions.containerPadding}rem;
    margin-bottom: ${dimensions.containerPadding}rem;
`

export default Footer
