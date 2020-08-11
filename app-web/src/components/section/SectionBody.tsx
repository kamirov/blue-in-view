import * as React from 'react'
import styled from '@emotion/styled'

interface Props {
  className?: string
}

// Centered container
const SectionBody: React.FC<Props> = ({ children, className }) => <Body className={className}>{children}</Body>

const Body = styled.div`
    margin-top: 1rem;
`

export default SectionBody
