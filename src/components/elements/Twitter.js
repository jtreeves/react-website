import axios from 'axios'
import { useState, useEffect } from 'react'

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
                return (
                    <div key={index}>
                        TWEET: {tweet.text}
                        DATE: {tweet.created_at}
                        LINK: {link}{tweet.id}
                    </div>
                )
            })
            setTweets(resultArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTweets()
    }, [])
    
    return (
        <div>
            {tweets}
        </div>
    )
}

export default Twitter