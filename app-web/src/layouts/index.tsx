import * as React from 'react'

import 'modern-normalize'
import '../styles/normalize'

import LayoutRoot from './LayoutRoot'
import LayoutMain from './LayoutMain'
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import { dimensions } from "../styles/dimensions";

const IndexLayout: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <LayoutRoot>
            <SEO />
            <LayoutMain>
                <Page>
                    <Content>
                        <Header/>
                        <Body>
                            {children}
                        </Body>
                        <Footer />
                    </Content>
                </Page>
            </LayoutMain>
        </LayoutRoot>
    </ThemeProvider>
)

const Content = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

const Body = styled.div`
    margin-top: ${dimensions.containerPadding}rem;
    flex-grow: 1;
`

export default IndexLayout
