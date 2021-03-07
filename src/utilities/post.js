function extractFromMediumPost(text, length) {
    const bodyIndex = text.indexOf('</figure>') + 9
    const bodyInitial = text.substring(bodyIndex)
    const bodyArray = bodyInitial.split(' ')
    const bodyCutOff = bodyArray.slice(0, length)
    const bodyString = bodyCutOff.join(' ') + '...'
    const imgBegin = text.indexOf('src=') + 5
    const imgEnd = text.indexOf('" />')
    const imgString = text.substring(imgBegin, imgEnd)
    const sections = {
        body: bodyString,
        image: imgString
    }
    return sections
}

function extractFromTumblrPost(text, length) {
    const bodyArray = text.split(' ')
    const bodyCutOff = bodyArray.slice(0, length)
    const bodyString = bodyCutOff.join(' ') + '...'
    return bodyString
}

export { extractFromMediumPost, extractFromTumblrPost }