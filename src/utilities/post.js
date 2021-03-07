function extractFromPost(type, text, length) {
    if (type === 'medium') {
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
    } else if (type === 'tumblr') {
        const bodyArray = text.split(' ')
        const bodyCutOff = bodyArray.slice(0, length)
        const bodyString = bodyCutOff.join(' ') + '...'
        return bodyString
    } else {
        return null
    }
}

export default extractFromPost