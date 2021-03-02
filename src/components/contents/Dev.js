import { useState, useEffect } from 'react'
import axios from 'axios'

import DevCard from '../elements/DevCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'
import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Dev() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/dev'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const date = convertTime(post.published_timestamp)
                return (
                    <div 
                        key={index}
                    >
                        <DevCard 
                            title={post.title}
                            image={post.cover_image}
                            description={post.description}
                            url={post.url}
                            date={date}
                        />
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 3)
            setPosts(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    useEffect(() => {
        getPosts()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Codings from DEV" />

            <div className="three-columns">
                {posts}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://dev.to/jtreeves"
                    target="_blank"
                    text="Read more posts"
                />
            </div>
        </main>
    )
}

export default Dev