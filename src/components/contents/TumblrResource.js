import { useState, useEffect } from 'react'
import axios from 'axios'

import TumblrResourceCard from '../cards/TumblrResourceCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'
import extractFromTumblrPost from '../../utilities/post'
import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function TumblrResources() {
    const [resources, setResources] = useState([])
        
    async function getResources() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr/link/resources'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const body = post.description
                const textSubstring = extractFromTumblrPost(body, 10)
                const date = post.date
                const correctTime = convertTime(date)
                return (
                    <div 
                        key={index}
                    >
                        <TumblrResourceCard 
                            title={post.title}
                            description={textSubstring}
                            time={correctTime}
                            link={post.post_url}
                        />
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 3)
            setResources(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getResources()
    }, [])

    return (
        <main>
            <SectionHeading heading="Recent Resources from Tumblr" />
            
            <div 
                className="three-columns"
                id="tumblr-resource-cards"
            >
                {resources}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://jacksonreeves.tumblr.com/"
                    target="_blank"
                    text="Find more resources"
                />
            </div>
        </main>
    )
}

export default TumblrResources