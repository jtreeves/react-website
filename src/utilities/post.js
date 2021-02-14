function extractFromPost(text, length) {
    const bodyIndex = text.indexOf('</p>') + 4
    const bodyInitial = text.substring(bodyIndex)
    const bodyArray = bodyInitial.split(' ')
    const bodyCutOff = bodyArray.slice(0, length)
    const bodyString = bodyCutOff.join(' ') + '...'
    const imgBegin = text.indexOf('img src=') + 9
    const imgEnd = text.indexOf('alt=') - 2
    const imgString = text.substring(imgBegin, imgEnd)
    const sections = {
        body: bodyString,
        image: imgString
    }
    return sections
}

export default extractFromPost