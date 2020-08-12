import * as React from 'react'
import {FormControl, InputLabel, Select} from "@material-ui/core";
import styled from "@emotion/styled";

type Props = {
    className?: string
    value: string
    label: string
    onChange: (value: string) => void
}

const Filter: React.FC<Props> = ({className, value, label, onChange, children}) => {

    const handleChange = (event: any) => {
        onChange(event.target.value)
    }

    return <FormControl className={className}>
        <StyledLabel>{label}</StyledLabel>
        <StyledSelect
            native
            labelId={label + '-label-id'}
            value={value}
            id={label + '-id'}
            onChange={handleChange}
        >{children}</StyledSelect>
    </FormControl>
}

const StyledLabel = styled(InputLabel)`
    color: #9abfef !important;
`

const StyledSelect = styled(Select)`
    color: #fff !important;

    &.MuiInput-select:before, &.MuiInput-underline:before {
      border-bottom: 1px solid #fff !important;
    }

    .MuiInput-input {
        padding: 0.7rem 0 0.4rem;
    }

    .MuiSelect-icon {
        color: #fff !important;
    }
`

export default Filter
