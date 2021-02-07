function convertTime(date) {
    const year = parseInt(date.slice(0, 4))
    const month = parseInt(date.slice(5, 7))
    const day = parseInt(date.slice(8, 10))
    const hour = parseInt(date.slice(11, 13))
    const minute = parseInt(date.slice(14, 16))
    const second = parseInt(date.slice(17, 19))
    const time = second + 60 * minute + 3600 * hour
    const convertTime = time - 3600 * 5
    let correctTime = null
    let correctDay = null     
    if (convertTime < 0) {
        correctTime = 24 * 3600 + convertTime
        correctDay = day - 1
    } else {
        correctTime = convertTime
        correctDay = day
    }
    let finalMinute = null
    if (minute < 10) {
        finalMinute = '0' + minute.toString()
    } else {
        finalMinute = minute
    }
    const correctHour = Math.floor(correctTime / 3600)
    let finalHour = null
    if (correctHour > 12) {
        finalHour = correctHour - 12
    } else if (correctHour === 0) {
        finalHour = 12
    } else {
        finalHour = correctHour
    }
    let lettersForHours = null
    if (correctHour < 12) {
        lettersForHours = 'AM'
    } else {
        lettersForHours = 'PM'
    }
    let finalDay = null
    let correctMonth = null
    if (correctDay === 0) {
        correctMonth = month -1
        if (correctMonth === 1 || 3 || 5 || 7 || 8 || 10 || 0) {
            finalDay = 31
        } else if (correctMonth === 2) {
            if (correctMonth % 4 === 0) {
                finalDay = 29
            } else {
                finalDay = 28
            }
        } else {
            finalDay = 30
        }
    } else {
        correctMonth = month
        finalDay = correctDay
    }
    let finalNumeralMonth = null
    let finalYear = null
    if (correctMonth === 0) {
        finalNumeralMonth = 12
        finalYear = year - 1
    } else {
        finalNumeralMonth = correctMonth
        finalYear = year
    }
    let finalMonth = null
    if (finalNumeralMonth === 1) {
        finalMonth = 'January'
    } else if (finalNumeralMonth === 2) {
        finalMonth = 'February'
    } else if (finalNumeralMonth === 3) {
        finalMonth = 'March'
    } else if (finalNumeralMonth === 4) {
        finalMonth = 'April'
    } else if (finalNumeralMonth === 5) {
        finalMonth = 'May'
    } else if (finalNumeralMonth === 6) {
        finalMonth = 'June'
    } else if (finalNumeralMonth === 7) {
        finalMonth = 'July'
    } else if (finalNumeralMonth === 8) {
        finalMonth = 'August'
    } else if (finalNumeralMonth === 9) {
        finalMonth = 'September'
    } else if (finalNumeralMonth === 10) {
        finalMonth = 'October'
    } else if (finalNumeralMonth === 11) {
        finalMonth = 'November'
    } else if (finalNumeralMonth === 12) {
        finalMonth = 'December'
    }
    const finalDate = `${finalHour}:${finalMinute}${lettersForHours} on ${finalMonth} ${finalDay}, ${finalYear}`
    return finalDate
}

export default convertTime