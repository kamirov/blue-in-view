import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from "gatsby";

export type ThumbnailCaptionType = 'left' | 'full' | 'right'

type Props = {
    className?: string
    image: any
    onClick?: () => void
    href?: string
    title?: string
    caption?: string
    captionType?: ThumbnailCaptionType
}

const Thumbnail: React.FC<Props> = ({className, image, title, href, caption, captionType, onClick}) => {

    const captionChildren = <React.Fragment>
        <CaptionBackground />
        <CaptionText>{caption}</CaptionText>
    </React.Fragment>

    const captionView = captionType ?
        ({
        left: <LeftCaption>{captionChildren}</LeftCaption>,
        full: <Caption>{captionChildren}</Caption>,
        right: <RightCaption>{captionChildren}</RightCaption>,
    })[captionType] :
    null

    const thumbnailContents = <Container className={className} onClick={onClick}>
        <Image src={image} title={title} />
        {captionView}
    </Container>

    if (href) {
        return <Link to={href}>{thumbnailContents}</Link>
    }

    return thumbnailContents
}

const Container = styled.div`
    position: relative;
    width: 100%;
    color: #fff;
    line-height: 0;
`

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const CaptionText = styled.span`
    font-weight: bold;
    font-size: 0.8rem;
    position: relative;
    z-index: 1;
    line-height: 2;
`

const CaptionBackground = styled.div`
    opacity: 0.5;
    background: #000;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
`



const Caption = styled.div`
    padding: 0.3rem 1rem;
    text-align: center;
    width: 100%;
    position: relative;

    pointer-events: none;
    position: absolute;
    bottom: 0;
    left: 0;
`

const SideCaption = styled(Caption)`
    width: auto;
    max-width: 50%;
`

const LeftCaption = SideCaption

const RightCaption = styled(SideCaption)`
    right: 0;
    left: auto
`


export default Thumbnail
