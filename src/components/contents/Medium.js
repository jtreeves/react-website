import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import extractFromPost from '../../utilities/medium'
import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Medium() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/medium'
            )
            const resultArray = result.data.posts.items.map((post, index) => {
                console.log(`CONTENT: ${post.content}`)
                const textSubstrings = extractFromPost(post.content, 50)
                console.log(`IMAGE: ${textSubstrings.image}`)
                console.log(`BODY: ${textSubstrings.body}`)
                const date = convertTime(post.isoDate)
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={textSubstrings.image}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={true}
                                list={false}
                                text={textSubstrings.body}
                                source={false}
                                cloud={false}
                                link={post.link}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={date}
                            />
                        </div>
                    )
                } else {
                    return null
                }
            })
            setPosts(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    useEffect(() => {
        getPosts()
    }, [])
    
    return (
        <div>
            <div className="contains-columns">
                <div className="left-column">
                    {posts}
                </div>
            </div>
        </div>
    )
}

export default Medium