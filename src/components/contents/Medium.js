import { useState, useEffect } from 'react'
import axios from 'axios'

import MediumCard from '../cards/MediumCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'
import convertTime from '../../utilities/time'
import extractFromPost from '../../utilities/post'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Medium() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/medium'
            )
            const resultArray = result.data.posts.items.map((post, index) => {
                const textSubstrings = extractFromPost('medium', post.content, 40)
                const date = convertTime(post.isoDate)
                return (
                    <div 
                        key={index}
                    >
                        <MediumCard 
                            title={post.title}
                            image={textSubstrings.image}
                            body={textSubstrings.body}
                            link={post.link}
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
            <SectionHeading heading="Recent Musings from Medium" />

            <div className="rows">
                {posts}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://jtreeves.medium.com/"
                    target="_blank"
                    text="Read more posts"
                />
            </div>
        </main>
    )
}

export default Medium