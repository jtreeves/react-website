import axios from 'axios'
import { useState, useEffect } from 'react'

const CONSUMER_KEY = process.env.TWITTER_OAUTH_CONSUMER_KEY
const TOKEN = process.env.TWITTER_OAUTH_TOKEN
const twitterUrl = 'https://api.twitter.com/2/users/15182079/tweets'
const twitterHeaders = { 
    'Authorization': 'OAuth oauth_consumer_key="' + CONSUMER_KEY + '",oauth_token="' + TOKEN + '",oauth_signature_method="HMAC-SHA1"'
}

function Twitter() {
    const [tweets, setTweets] = useState([])
    
    async function gettingTwitter() {
        const result = await axios.get({
            url: twitterUrl,
            headers: twitterHeaders
        })
        console.log(`RESULT: ${result}`)
        const resultData = result.data
        console.log(`RESULT.DATA: ${resultData}`)
        const resultDataArray = resultData.map((tweet, index) => {
            return (
                <div key={index}>
                    {tweet.text}
                </div>
            )
        })
        setTweets(resultDataArray)
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