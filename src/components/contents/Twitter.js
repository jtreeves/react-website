import { useState, useEffect } from 'react'
import axios from 'axios'

import convertTime from '../../utilities/time'
import Card from '../elements/Card'

const appServer = process.env.REACT_APP_SERVER_URL
const link = 'https://twitter.com/JTReeves/status/'

function Twitter() {
    const [tweets, setTweets] = useState([])
    
    async function getTweets() {
        try {
            const result = await axios.get(
                appServer + '/twitter'
            )
            const resultArray = result.data.tweets.map((tweet, index) => {
                const text = tweet.text
                const date = tweet.created_at
                const correctTime = convertTime(date)
                const fullLink = link + tweet.id
                return (
                    <div 
                        key={index}
                    >
                        <Card 
                            image={false}
                            title={false}
                            danger={false}
                            text={text}
                            source="@JTReeves"
                            link={fullLink}
                            button="View tweet"
                            time={correctTime}
                        />
                    </div>
                )
            })
            setTweets(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getTweets()
    }, [])
    
    return (
        <div className="twitter">
            {tweets}
            <a 
                href="https://twitter.com/JTReeves" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center social"
                >
                    Read more tweets
                </button>
            </a>
        </div>
    )
}

export default Twitter