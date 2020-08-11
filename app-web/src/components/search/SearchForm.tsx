import * as React from "react";
import styled from "@emotion/styled";
import { FormEvent } from "react";
import SearchInput from "./SearchInput";
import { isBrowser } from "../../library/ssr.module";

type Props = {
    className? : string
}

type State = {
    searchQuery : string
}

class SearchForm extends React.Component<Props, State> {
    constructor(props : Props) {
        super(props);

        if (isBrowser()) {
            const urlParams   = new URLSearchParams(location.search);
            const searchQuery = urlParams.get("q") || "";

            this.state = {
                searchQuery
            };
        } else {
            this.state = {
                searchQuery : ""
            };
        }


        this.handleSubmit            = this.handleSubmit.bind(this);
        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    }

    handleSubmit(event : FormEvent) {
        // TODO: Fix TypeError that occurs whenever this is triggered
        event.preventDefault();

        if (isBrowser()) {
            window.location.href = `/search/?q=${this.state.searchQuery}`;
        }
    }

    async handleSearchQueryChange(searchQuery : string) {
        await this.setState({
            ...this.state,
            searchQuery
        });
    }

    render() {
        let { className } = this.props;

        return (
            <StyledForm className={className} onSubmit={this.handleSubmit}>
                <SearchInput value={this.state.searchQuery}
                             onChange={this.handleSearchQueryChange}/>
            </StyledForm>
        );
    }
}

const StyledForm = styled.form`
    width: 100%;
`;

export default SearchForm;
