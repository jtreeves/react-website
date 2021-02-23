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
                const textSubstrings = extractFromPost(post.content, 50)
                const date = convertTime(post.isoDate)
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                            className="blog-card"
                        >
                            <div className="blog-card-side">
                                <img 
                                    src={textSubstrings.image}
                                    alt={post.title}
                                    className="blog-card-img"
                                />
                            </div>

                            <div className="blog-card-main">
                                <div className="blog-card-body">
                                    <h4>{post.title}</h4>

                                    <div 
                                        dangerouslySetInnerHTML={{
                                            __html: textSubstrings.body
                                        }} 
                                    />
                                </div>

                                <div className="blog-card-footer">
                                    <a 
                                        href={post.link} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <button 
                                            className="blog-card-button"
                                        >
                                            Read more
                                        </button>
                                    </a>

                                    <div 
                                        className="blog-card-date"
                                    >
                                        {date}
                                    </div>
                                </div>
                            </div>
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

export default Medium