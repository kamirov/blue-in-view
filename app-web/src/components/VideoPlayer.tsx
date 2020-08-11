import * as React from 'react'
import styled from '@emotion/styled'
import { VideoFormatMap } from "../domain/videos/video.module";

type Props = {
    className?: string
    videos: VideoFormatMap
    screenshot: string
    isMuted?: boolean
}

// @ts-ignore TODO: Implement screenshots
const VideoPlayer: React.FC<Props> = ({className, videos, screenshot, isMuted}) => {

    const videoTypes = Object.keys(videos)

    // We need a new key, otherwise React won't re-render the video when the source changes
    // @ts-ignore TODO: Fix why we TS complains when we use the format-map video type as the key
    const key = videos[videoTypes[0]]

    return <Container className={className}>
        <StyledVideo muted={isMuted} controlsList="nodownload" autoPlay controls key={key} poster={screenshot}>
            {videos.mp4 && <source src={videos.mp4} type="video/mp4" />}
        </StyledVideo>
    </Container>

}

const Container = styled.div`
`

const StyledVideo = styled.video`
    width: 100%;
`

export default VideoPlayer
