import * as React from 'react'
import styled from '@emotion/styled'
import { dimensions } from "../styles/dimensions";

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 ${dimensions.containerPadding}px;
`

export default LayoutMain
