import * as React from 'react'
import styled from '@emotion/styled'

interface Props {
  className?: string
}

// Centered container
const SectionHeading: React.FC<Props> = ({ children, className }) => <Heading className={className}>{children}</Heading>

const Heading = styled.h2`
    font-size: 1.2rem;
    text-align: center;
`

export default SectionHeading
