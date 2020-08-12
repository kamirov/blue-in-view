import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby";
import Container from "./Container";

interface Props {
    className?: string
}

const Footer: React.FC<Props> = ({className}) => {
    return <StyledFooter className={className}>
        <StyledContainer>
            <SocialContainer>
                <span>Follow us:</span>
                <SocialItemsContainer>
                    <a href="https://www.youtube.com/channel/UCeDZQwTUCVlFFUtyIwoFDMw" target="_blank">YouTube</a>
                    <a href="https://www.facebook.com/Blue-in-View-126883295546054" target="_blank">Facebook</a>
                </SocialItemsContainer>
            </SocialContainer>
            <FooterMenu>
                <FooterMenuLink to={"/about"}>About</FooterMenuLink>
            </FooterMenu>
        </StyledContainer>
    </StyledFooter>
}

const SocialContainer = styled.div`
    font-weight: bold;
`

const SocialItemsContainer = styled.span`
    > * {
        margin-left: 1rem;
    }
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
    font-size: 0.9rem;
    border-top: 2px solid #eee;
    padding-top: 1rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
`

export default Footer
