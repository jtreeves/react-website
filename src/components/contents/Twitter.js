import { useState, useEffect } from 'react'
import axios from 'axios'

import TwitterCard from '../elements/TwitterCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'
import convertTime from '../../utilities/time'

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
                return (
                    <div 
                        key={index}
                    >
                        <TwitterCard 
                            text={text}
                            time={correctTime}
                            link={fullLink}
                        />
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 3)
            setTweets(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getTweets()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Tweets from Twitter" />

            <div className="three-columns">
                {tweets}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://twitter.com/JTReeves"
                    target="_blank"
                    text="View more tweets"
                />
            </div>
        </main>
    )
}

export default Twitter