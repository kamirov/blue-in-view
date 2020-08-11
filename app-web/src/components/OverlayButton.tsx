import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby";


type Props = {
    className?: string
    onClick?: () => void
    href?: string
    title?: string
    label: string
}

const OverlayButton: React.FC<Props> = ({className, title, href, label, onClick}) => {

    const contents = <Container className={className} onClick={onClick} title={title}>
        <Overlay />
        <Label>{label}</Label>
    </Container>

    if (href) {
        return <Link to={href}>{contents}</Link>
    }

    return contents
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    line-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Label = styled.span`
    font-weight: bold;
    position: relative;
    z-index: 1;
    line-height: 2;
`

const Overlay = styled.div`
    opacity: 0.8;
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`

export default OverlayButton
