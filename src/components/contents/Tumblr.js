import { useState, useEffect, createElement } from 'react'
import axios from 'axios'
import Card from '../elements/Card'
import convertTime from '../../utilities/time'

const appServer = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                appServer + '/tumblr'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const date = post.date
                const correctTime = convertTime(date)
                return (
                    <div 
                        key={index}
                    >
                        <Card 
                            title={post.title}
                            danger={true}
                            text={post.body}
                            source="Jackson Reeves"
                            link={post.post_url}
                            button="View full post"
                            time={correctTime}
                        />
                    </div>
                )
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
            <a 
                href="https://programming10101.tumblr.com" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center"
                >
                    Read more posts
                </button>
            </a>
        </div>
    )
}

export default Tumblr