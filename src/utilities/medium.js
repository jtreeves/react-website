function extractFromPost(text, length) {
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

export default extractFromPost