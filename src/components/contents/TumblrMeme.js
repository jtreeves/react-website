import { useState, useEffect } from 'react'
import axios from 'axios'

import SectionHeading from '../sections/SectionHeading'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function TumblrMemes() {
    const [photos, setPhotos] = useState([])

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
        getPhotos()
    }, [])

    return (
        <main>
            <SectionHeading heading="Recent Memes from Tumblr" />
            
            <div className="three-columns">
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

export default TumblrMemes