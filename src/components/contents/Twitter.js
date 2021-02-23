import { useState, useEffect } from 'react'
import axios from 'axios'

import convertTime from '../../utilities/time'
import Card from '../elements/Card'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
const link = 'https://twitter.com/JTReeves/status/'

function Twitter() {
    const [tweets, setTweets] = useState([])
    
    async function getTweets() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/twitter'
            )
            const resultArray = result.data.tweets.map((tweet, index) => {
                const text = tweet.text
                const date = tweet.created_at
                const correctTime = convertTime(date)
                const fullLink = link + tweet.id
                if (index < 5) {
                return (
                    <div 
                        key={index}
                    >
                        <Card 
                            image={false}
                            title={false}
                            subtitle={false}
                            lead={false}
                            danger={false}
                            list={false}
                            text={text}
                            source="@JTReeves"
                            cloud={false}
                            link={fullLink}
                            button="View tweet"
                            otherLink={false}
                            otherButton={false}
                            time={correctTime}
                        />
                    </div>
                )
                }
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
        <div>
            {tweets}
        </div>
    )
}

export default Twitter