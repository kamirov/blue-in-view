import * as React from "react";
import styled from "@emotion/styled";
import { dimensions } from "../styles/dimensions";
import Container from "./Container";
import Logo from "./Logo";
import { Link } from "gatsby";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SendIcon from '@material-ui/icons/Send';

interface Props {
    className? : string
}

const toHomeTitle = "Go to home page"

const emailSubject = `(Blue in View) Video submission`
const emailBody = `Attach a video to this email or include a link to it. Please make sure to include the location (country and city), approximately when this video took place (at least the year), and that your video identifies the officer either by name or badge number.`
const sendUrl = `mailto:andrei.khramtsov@gmail.com?subject=${emailSubject}&body=${emailBody}`

const Header : React.FC<Props> = ({ className }) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const linkedLogo = <Link to={"/"} title={toHomeTitle}>
        <StyledLogo/>
    </Link>;

    const logoAndMenu = <MultiItemContent>
        {linkedLogo}
        <ButtonGroup variant="contained" color="primary" aria-label="text primary button group">
            <ButtonLink to={"/about"}>
                <Button color="primary" variant={"text"}>About</Button>
            </ButtonLink>
            <Button
                color="primary"
                endIcon={<SendIcon />}
                onClick={handleClickOpen}
            >
                Send a Video
            </Button>
        </ButtonGroup>
    </MultiItemContent>;

    return <StyledHeader className={className}>
        {logoAndMenu}
        <Container>
            <Link to={"/"} title={toHomeTitle}>
                <Subtitle>Keeping watch on our police officers</Subtitle>
            </Link>
        </Container>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Thank you for offering a video!"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Click below to send us a video by email either by attaching it or sending us a link.
                    <br/><br/>
                    Please make sure to include the location (country and city), approximately when this video took place (at least the year), and that your video identifies the officer either by name or badge number.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
                <ExternalButtonLink href={sendUrl} target="_blank">
                    <Button onClick={handleClose} color="primary" autoFocus>
                    Send a Video
                    </Button>
                </ExternalButtonLink>
            </DialogActions>
        </Dialog>
    </StyledHeader>;
};

const StyledHeader = styled.header`
    padding: ${dimensions.containerPadding} ${dimensions.containerSidePadding};
`;

const ExternalButtonLink = styled.a`
    &:hover,
    &:focus {
      opacity: 1;
    }
`

const ButtonLink = styled(Link)`
    color: #fff;

    .MuiButtonBase-root {
        padding: 6px 16px;
        border-radius: 0px;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
`

const Subtitle = styled.span`
    text-align: center;
    position: absolute;
    top: -2.6rem;
    font-size: 0.8rem;
    left: 14rem;
    font-style: oblique;
    font-weight: bold;
    color: #444;
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
