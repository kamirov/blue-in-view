import * as React from 'react'

type Props = {
    className?: string
    url: string
    title: string
}

const VideoPlayer: React.FC<Props> = ({className, url, title}) => {

    return <iframe
        className={className}
        src={url}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
    />
}

export default VideoPlayer
