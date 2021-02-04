import axios from 'axios'
import { useState, useEffect } from 'react'

const appServer = process.env.REACT_APP_SERVER_URL

function Twitter() {
    const [tweets, setTweets] = useState([])
    
    async function gettingTwitter() {
        try {
            const result = await axios.get(
                appServer + '/twitter'
            )
            const resultData = result.data
            const resultDataArray = resultData.tweets.map((tweet, index) => {
                return (
                    <div key={index}>
                        {tweet.text}
                        {tweet.id}
                        {tweet.created_at}
                    </div>
                )
            })
            setTweets(resultDataArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        gettingTwitter()
    }, [])
    
    return (
        <div>
            {tweets}
        </div>
    )
}

export default Twitter