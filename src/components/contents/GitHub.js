import { useState, useEffect } from 'react'
import axios from 'axios'

const appServer = process.env.REACT_APP_SERVER_URL
const link = 'https://github.com/'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function getCommits() {
        try {
            const result = await axios.get(
                appServer + '/github'
            )
            const resultArray = result.data.commits.map((commit, index) => {
                if (commit.payload.commits) {
                    const fullLink = link + commit.repo.name
                    const date = commit.created_at
                    const year = date.slice(0, 4)
                    const month = date.slice(5, 7)
                    const day = date.slice(8, 10)
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
                    let checkMonth = null
                    let correctYear = null
                    if (correctMonth === 0) {
                        checkMonth = 12
                        correctYear = year - 1
                    } else {
                        checkMonth = correctMonth
                        correctYear = year
                    }
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
                    const fullDate = `${meridiemHour}:${minute}${lettersForHours} on ${spelledMonth} ${checkDay}, ${correctYear}`
                    if (index < 20) {
                        return (
                            <div 
                                key={index}
                                className="card card-lock card-connect"
                            >
                                <div className="card-body">
                                    {commit.payload.commits[0].message}
                                    <div
                                        className="blockquote-footer"
                                    >
                                        {commit.repo.name}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a 
                                        href={fullLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <button className="btn btn-primary float-left">
                                            View repo
                                        </button>
                                    </a>
                                    <div className="float-right text-muted card-footer-connect">
                                        {fullDate}
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            })
            setCommits(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])
    
    return (
        <div className="github">
            {commits}
        </div>
    )
}

export default GitHub