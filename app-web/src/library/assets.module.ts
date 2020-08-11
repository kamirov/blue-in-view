export const Assets = {
    getMediaUrl
}

const s3Base = `https://s3.ca-central-1.amazonaws.com/assets.danceprime.com`
function getMediaUrl(path: string) {
    return `${s3Base}/media/${path}`
}
