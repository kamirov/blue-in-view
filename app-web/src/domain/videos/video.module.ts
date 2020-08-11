// TODO Inject this

import { Assets } from "../../library/assets.module";

export const VideoModule = {
    getScreenshot,
    getVideos
}

const cache: VideoCache = {
    screenshots: {},
    videos: {}
}

function getScreenshot(videoId: string) {
    if (!cache.screenshots[videoId]) {
        cache.screenshots[videoId] = Assets.getMediaUrl(`videos/${videoId}/screenshot.png`)
    }

    return cache.screenshots[videoId]
}

function getVideos(videoId: string): VideoFormatMap {
    if (!cache.videos[videoId]) {
        cache.videos[videoId] = {
            mp4: Assets.getMediaUrl(`videos/${videoId}/video.mp4`)
        }
    }

    return cache.videos[videoId]
}

// TODO: Identify video types and replace 'any'
export type VideoFormatMap = {
    mp4: any
}

type VideoCache = {
    screenshots: {
        [key: string]: string
    },
    videos: {
        [key: string]: VideoFormatMap
    }
}
