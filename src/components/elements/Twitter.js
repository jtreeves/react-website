import axios from 'axios'
import { useState, useEffect } from 'react'

// const CONSUMER_KEY = process.env.REACT_APP_TWITTER_OAUTH_CONSUMER_KEY
// const TOKEN = process.env.REACT_APP_TWITTER_OAUTH_TOKEN
// const twitterUrl = 'https://api.twitter.com/2/users/15182079/tweets'
// const twitterHeaders = { 
//     'Authorization': 'OAuth oauth_consumer_key="' + CONSUMER_KEY + '",oauth_token="' + TOKEN + '",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1612399605",oauth_nonce="vwqDpKzb1OI",oauth_version="1.0",oauth_signature="W94Un693iVA%2FV4KVTpubukHwlW0%3D"',
//     'Cookie': 'personalization_id="v1_ZTziNz8G674lqjpwGOyjsQ=="; guest_id=v1%3A161239937142054139'
// }

const appServer = process.env.REACT_APP_SERVER_URL

function Twitter() {
    const [tweets, setTweets] = useState([])
    
    async function gettingTwitter() {
        try {
            const result = await axios.get(
                appServer + '/twitter'
            )
            const resultData = result.data
            console.log(`RESULT.DATA: ${resultData}`)
            console.log(`RESULT.DATA.TWEETS: ${resultData.tweets}`)
            console.log(`RESULT.DATA KEYS: ${Object.keys(resultData)}`)
            const resultDataArray = resultData.tweets.map((tweet, index) => {
                return (
                    <div key={index}>
                        {tweet.text}
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