import * as React from 'react'
import styled from '@emotion/styled'

interface Props {
  className?: string
}

// Centered container
const PageSection: React.FC<Props> = ({ children, className }) => <Section className={className}>{children}</Section>

const pad = 1.5

const Section = styled.div`
    border-bottom: 2px solid #eee;
    padding-bottom: ${pad}rem;
    margin-top: ${pad}rem;
    
    &:last-child {
        border-bottom: none;
    }
`

export default PageSection
