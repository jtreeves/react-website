import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import extractFromPost from '../../utilities/post'
import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const date = post.date
                const correctTime = convertTime(date)
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={false}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={true}
                                list={false}
                                text={post.description}
                                source={false}
                                cloud={false}
                                link={post.post_url}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={correctTime}
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
            {posts}
        </div>
    )
}

export default Tumblr