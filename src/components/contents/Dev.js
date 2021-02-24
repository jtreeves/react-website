import { useState, useEffect } from 'react'
import axios from 'axios'

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
                if (index < 3) {
                    return (
                        <div 
                            key={index}
                            className="code-blog-card"
                        >
                            <div className="code-blog-card-top">
                                <a 
                                    href={post.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <img 
                                        src={post.cover_image}
                                        alt={post.title}
                                        className="code-blog-card-img"
                                    />
                                </a>
                            </div>

                            <div className="code-blog-card-main">
                                <div    
                                    className="code-blog-card-body"
                                >
                                    <h4>
                                        <a 
                                            href={post.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {post.title}
                                        </a>
                                    </h4>

                                    <p>{post.description}</p>
                                </div>

                                <div 
                                    className="code-blog-card-footer"
                                >
                                    <div 
                                        className="code-blog-card-button"
                                    >
                                        <Button 
                                            link={post.url}
                                            target="_blank"
                                            text="Read more"
                                        />
                                    </div>

                                    <div 
                                        className="code-blog-card-date"
                                    >
                                        <a 
                                            href={post.url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {date}
                                        </a>
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
        <main>
            <SectionHeading heading="Recent Codings" />

            <div className="projects-list">
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