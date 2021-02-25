import { useState, useEffect } from 'react'
import axios from 'axios'

import convertTime from '../../utilities/time'
import SectionHeading from '../sections/SectionHeading'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Tumblr(props) {
    const [resources, setResources] = useState([])
    const [photos, setPhotos] = useState([])
        
    async function getResources() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr/link/resources'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const date = post.date
                const correctTime = convertTime(date)
                return (
                    <div 
                        key={index}
                        className="resource-blog-card"
                    >
                        <div 
                            className="resource-blog-card-body"
                        >
                            <h4>
                                <a 
                                    href={post.post_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    {post.title}
                                </a>
                            </h4>

                            <div 
                                dangerouslySetInnerHTML={{
                                    __html: post.description
                                }} 
                            />
                        </div>

                        <div 
                            className="resource-blog-card-footer"
                        >
                            <div 
                                className="resource-blog-card-button"
                            >
                                <Button 
                                    link={post.post_url}
                                    target="_blank"
                                    text="Read more"
                                />
                            </div>

                            <div 
                                className="resource-blog-card-date"
                            >
                                <a 
                                    href={post.post_url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    {correctTime}
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 3)
            setResources(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    async function getPhotos() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr/photo/fun'
            )
            const resultArray = result.data.posts.map((post, index) => {
                return (
                    <div 
                        key={index}
                        className="meme-card"
                    >
                        <a 
                            href={post.post_url} 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            <img 
                                src={post.photos[0].original_size.url}
                                alt="meme"
                            />
                        </a>
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 3)
            setPhotos(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getResources()
    }, [])

    useEffect(() => {
        getPhotos()
    }, [])

    if (props.category === 'resources') {
        return (
            <main>
                <SectionHeading heading="Recent Resources" />
                
                <div className="projects-list">
                    {resources}
                </div>
    
                <div className="blank-space" />
    
                <div className="center">
                    <Button 
                        link="https://jacksonreeves.tumblr.com/"
                        target="_blank"
                        text="Find more resources"
                    />
                </div>
            </main>
        )
    }

    if (props.category === 'photos') {
        return (
            <main>
                <SectionHeading heading="Recent Memes" />
                
                <div className="projects-list">
                    {photos}
                </div>
    
                <div className="blank-space" />
    
                <div className="center">
                    <Button 
                        link="https://jacksonreeves.tumblr.com/"
                        target="_blank"
                        text="See more memes"
                    />
                </div>
            </main>
        )
    }
}

export default Tumblr