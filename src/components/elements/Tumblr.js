import { useState, useEffect } from 'react'
import axios from 'axios'

const appServer = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                appServer + '/tumblr'
            )
            const resultArray = result.data.posts.map((post, index) => {
                return (
                    <div key={index}>
                        TITLE: {post.title}
                        BODY: {post.body}
                        DATE: {post.date}
                        LINK: {post.post_url}
                    </div>
                )
            })
            setPosts(resultArray)
        } catch (error) {
            console.log(error)
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