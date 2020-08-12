import * as React from "react";
import styled from "@emotion/styled";
import { dimensions } from "../styles/dimensions";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "gatsby";
import {Button} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SendIcon from '@material-ui/icons/Send';

interface Props {
    className? : string
}

const Header : React.FC<Props> = ({ className }) => {
    const linkedLogo = <Link to={"/"}>
        <StyledLogo/>
    </Link>;

    const logoAndMenu = <MultiItemContent>
        {linkedLogo}
        <ButtonGroup variant="contained" color="primary" aria-label="text primary button group">
            <Button>About</Button>
            <Button
                color="primary"
                endIcon={<SendIcon />}
            >
                Send a Video
            </Button>
        </ButtonGroup>
    </MultiItemContent>;

    return <StyledHeader className={className}>
        {logoAndMenu}
        <Container>
            <Subtitle>Keeping watch on our police officers</Subtitle>
        </Container>
    </StyledHeader>;
};

const StyledHeader = styled.header`
    padding: ${dimensions.containerPadding} ${dimensions.containerSidePadding};
`;

const Subtitle = styled.span`
    text-align: center;
    position: absolute;
    top: -2.6rem;
    font-size: 0.8rem;
    left: 14rem;
    font-style: oblique;
    font-weight: bold;
`

const Content = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
`;

const MultiItemContent = styled(Content)`
    justify-content: space-between;
    padding: 1rem 1rem 2rem;
`;

const StyledLogo = styled(Logo)`
    height: 60px;
    width: auto;
`;

export default Header;
