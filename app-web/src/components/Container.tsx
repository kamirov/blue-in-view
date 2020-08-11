import * as React from 'react'
import styled from '@emotion/styled'
import { widths } from "../styles/dimensions";

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${widths.xl}px;
`

interface ContainerProps {
  className?: string
}

// Centered container
const Container: React.FC<ContainerProps> = ({ children, className }) => <StyledContainer className={className}>{children}</StyledContainer>

export default Container
