import { useState, useEffect } from 'react'
import axios from 'axios'

import convertTime from '../../utilities/time'
import Card from '../elements/Card'
import SectionHeading from '../sections/SectionHeading'
import Square from '../elements/Square'
import Button from '../elements/Button'

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
                const body = <div className="square-padding">{text}</div>
                if (index < 3) {
                return (
                    <div 
                            key={index}
                            className="tweet-card"
                        >
                            <div className="tweet-card-body">
                                
                                    
                                    <p>{text}</p>
                                </div>

                                <div 
                                    className="tweet-card-footer"
                                >
                                    <div 
                                        className="tweet-card-button"
                                    >
                                        <Button 
                                            link={fullLink}
                                            text="View tweet"
                                        />
                                    </div>

                                    <div 
                                        className="tweet-card-date"
                                    >
                                        <a 
                                            href={fullLink} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {correctTime}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        // </div>
                    // <div 
                    //     key={index}
                    // >
                        /* <Card 
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
                        /> */

                        // <Square 
                        //     main={body}
                        //     link={fullLink}
                        //     overlay="View Tweet"
                        // />

/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">{text}</p>&mdash; Jackson Reeves (@JTReeves) <a href={fullLink}>{correctTime}</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">DEV&#39;s platform is awesome because it was actually designed to handle code snippets, so I want to use it for all my blogging needs. However, transferring all my old posts manually is a headache. Plus, they don&#39;t allow backdating! IT&#39;S THEIR ONE FLAW.</p>&mdash; Jackson Reeves (@JTReeves) <a href="https://twitter.com/JTReeves/status/1363195447234465792?ref_src=twsrc%5Etfw">February 20, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */
                    // </div>
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
        <main>
            <SectionHeading heading="Recent Tweets" />

            <div className="projects-list">
                {tweets}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://twitter.com/JTReeves"
                    text="View more tweets"
                />
            </div>
        </main>
    )
}

export default Twitter