import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'
import SectionHeading from '../sections/SectionHeading'

import extractFromPost from '../../utilities/medium'
import convertTime from '../../utilities/time'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Medium() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/medium'
            )
            const resultArray = result.data.posts.items.map((post, index) => {
                const textSubstrings = extractFromPost(post.content, 40)
                const date = convertTime(post.isoDate)
                if (index < 3) {
                    return (
                        <div 
                            key={index}
                            className="blog-card"
                        >
                            <div className="blog-card-side">
                                <a 
                                    href={post.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    <img 
                                        src={textSubstrings.image}
                                        alt={post.title}
                                        className="blog-card-img"
                                    />
                                </a>
                            </div>

                            <div className="blog-card-main">
                                <div className="blog-card-body">
                                    <h4>
                                        <a 
                                            href={post.link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {post.title}
                                        </a>
                                    </h4>

                                    <div 
                                        dangerouslySetInnerHTML={{
                                            __html: textSubstrings.body
                                        }} 
                                    />
                                </div>

                                <div className="blog-card-footer">
                                    <div 
                                        className="blog-card-button"
                                    >
                                        <Button 
                                            link={post.link}
                                            text="Read more"
                                        />
                                    </div>

                                    <div 
                                        className="blog-card-date"
                                    >
                                        <a 
                                            href={post.link} 
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
            <SectionHeading heading="Recent Musings" />

            <div className="rows">
                {posts}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://jtreeves.medium.com/"
                    text="Read more posts"
                />
            </div>
        </main>
    )
}

export default Medium