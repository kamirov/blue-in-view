import * as React from 'react'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styled from "@emotion/styled";
import { FormEvent } from "react";

type Props = {
    className?: string
    value: string
    onChange: (text: string) => void
}
const SearchInput: React.FC<Props> = ({className, value, onChange}) => {

    const handleChange = (event: FormEvent) => {
        // @ts-ignore   TODO: Figure out why TS is complaining about value. Probably the FormEvent type is incorrect
        onChange(event.target.value)
    }

    // @ts-ignore TODO: Figure out why TS is giving me an instantiation error here
    const searchField = <SearchField id="standard-secondary" value={value} onChange={handleChange} placeholder="Salsa, mambo, kizomba, etc." color="secondary" variant="standard" />

    return <SearchContainer className={className}>
        {searchField}
        <StyledIconButton type="submit" aria-label="search">
            <SearchIcon/>
        </StyledIconButton>
    </SearchContainer>
}

const SearchContainer = styled.div`
    width: 100%;
    display: flex;
`

const SearchField = styled(TextField)`
    width: 100%;
`

const StyledIconButton = styled(IconButton)`
    margin-left: 1rem;
    top: -0.5rem;
`

export default SearchInput
