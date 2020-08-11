import * as React from "react";
import styled from "@emotion/styled";
import { dimensions, widths } from "../styles/dimensions";
import Container from "./Container";
import Logo from "./Logo";
import { colors } from "../theme";
import { Link } from "gatsby";
import SearchForm from "./search/SearchForm";

interface Props {
    className? : string
}

const Header : React.FC<Props> = ({ className }) => {
    const linkedLogo = <Link to={"/"}>
        <StyledLogo/>
    </Link>;

    const headerContent = <MultiItemContent>
        {linkedLogo}
        <StyledSearch/>
    </MultiItemContent>;

    return <StyledHeader className={className}>
        {headerContent}
    </StyledHeader>;
};

const StyledHeader = styled.header`
    padding: ${dimensions.containerPadding}rem 0;
    border-bottom: 2px solid ${colors.secondary}
`;

const Content = styled(Container)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
`;

const MultiItemContent = styled(Content)`
    justify-content: space-between;
`;

const StyledLogo = styled(Logo)`
    height: 60px;
    width: auto;
`;

const StyledSearch = styled(SearchForm)`
    max-width: 50%;
    position: relative;
    top: 4px;
    min-width: ${widths.xl / 4}px;
`;

export default Header;
