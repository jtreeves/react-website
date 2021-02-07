function convertTime(date) {
    const year = parseInt(date.slice(0, 4))
    const month = parseInt(date.slice(5, 7))
    console.log(`MONTH: ${month}`)
    const day = parseInt(date.slice(8, 10))
    const hour = parseInt(date.slice(11, 13))
    const minute = date.slice(14, 16)
    const minuteInt = parseInt(minute)
    const second = parseInt(date.slice(17, 19))
    const time = second + 60 * minuteInt + 3600 * hour
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
    const correctHour = Math.floor(correctTime / 3600)
    let meridiemHour = null
    if (correctHour > 12) {
        meridiemHour = correctHour - 12
    } else if (correctHour === 0) {
        meridiemHour = 12
    } else {
        meridiemHour = correctHour
    }
    let lettersForHours = ''
    if (correctHour < 12) {
        lettersForHours = 'AM'
    } else {
        lettersForHours = 'PM'
    }
    let checkDay = null
    let correctMonth = null
    if (correctDay === 0) {
        correctMonth = month -1
        if (correctMonth === 1 || 3 || 5 || 7 || 8 || 10 || 0) {
            checkDay = 31
        } else if (correctMonth === 2) {
            if (correctMonth % 4 === 0) {
                checkDay = 29
            } else {
                checkDay = 28
            }
        } else {
            checkDay = 30
        }
    } else {
        correctMonth = month
        checkDay = correctDay
    }
    console.log(`CORRECTMONTH: ${correctMonth}`)
    let checkMonth = null
    let correctYear = null
    if (correctMonth === 0) {
        checkMonth = 12
        correctYear = year - 1
    } else {
        checkMonth = correctMonth
        correctYear = year
    }
    console.log(`CHECKMONTH: ${checkMonth}`)
    let spelledMonth = ''
    if (checkMonth === 1) {
        spelledMonth = 'January'
    } else if (checkMonth === 2) {
        spelledMonth = 'February'
    } else if (checkMonth === 3) {
        spelledMonth = 'March'
    } else if (checkMonth === 4) {
        spelledMonth = 'April'
    } else if (checkMonth === 5) {
        spelledMonth = 'May'
    } else if (checkMonth === 6) {
        spelledMonth = 'June'
    } else if (checkMonth === 7) {
        spelledMonth = 'July'
    } else if (checkMonth === 8) {
        spelledMonth = 'August'
    } else if (checkMonth === 9) {
        spelledMonth = 'September'
    } else if (checkMonth === 10) {
        spelledMonth = 'October'
    } else if (checkMonth === 11) {
        spelledMonth = 'November'
    } else if (checkMonth === 12) {
        spelledMonth = 'December'
    }
    console.log(`SPELLEDMONTH: ${spelledMonth}`)
    const fullDate = `${meridiemHour}:${minute}${lettersForHours} on ${spelledMonth} ${checkDay}, ${correctYear}`
    return fullDate
}

export default convertTime