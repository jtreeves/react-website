import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

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
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={post.cover_image}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={false}
                                list={false}
                                text={post.description}
                                source={false}
                                cloud={false}
                                link={post.url}
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

export default Dev