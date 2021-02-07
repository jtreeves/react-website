function extractPostPortions(text) {
    const bodyIndex = text.indexOf('</p>') + 4
    const bodyString = text.substring(bodyIndex, bodyIndex + 500) + '...'
    const imgBegin = text.indexOf('img src=') + 9
    const imgEnd = text.indexOf('alt=') - 2
    const imgString = text.substring(imgBegin, imgEnd)
    const sections = {
        body: bodyString,
        image: imgString
    }
    return sections
}

export default extractPostPortions