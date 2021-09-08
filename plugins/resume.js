const resume = {
    avatarURL: (fileName) => {
        return `/resume-avatar/${fileName}`
    }
}

export default ({}, inject) => {
    inject('resume', resume)
}