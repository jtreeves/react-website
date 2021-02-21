import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Medium() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/medium'
            )
            console.log(`RESULT: ${result}`)
            console.log(`RESULT KEYS: ${Object.keys(result)}`)
            console.log(`RESULT.DATA: ${result.data}`)
            console.log(`RESULT.DATA KEYS: ${Object.keys(result.data)}`)
            console.log(`RESULT.DATA.POSTS: ${result.data.posts}`)
            console.log(`RESULT.DATA.POSTS KEYS: ${Object.keys(result.data.posts)}`)
            console.log(`RESULT.DATA.POSTS.ITEMS: ${result.data.posts.items}`)
            console.log(`RESULT.DATA.POSTS.ITEMS KEYS: ${Object.keys(result.data.posts.items)}`)
            const resultArray = result.data.posts.items.map((post, index) => {
                // const date = convertTime(post.published_timestamp)
                console.log(`POST KEYS: ${Object.keys(post)}`)
                // const newContent = post[content:encoded]
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
                                text={post.content}
                                source={false}
                                cloud={false}
                                link={post.link}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={post.isoDate}
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