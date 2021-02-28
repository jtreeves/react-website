import { useState, useEffect } from 'react'
import axios from 'axios'

import SectionHeading from '../sections/SectionHeading'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const youtubeEmbedUrl = 'https://www.youtube.com/embed/'

function YouTube() {
    const [videos, setVideos] = useState([])

    async function getVideos() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/youtube'
            )
            const resultArray = result.data.videos.items.map((video, index) => {
                const youtubeId = video.id.videoId
                const embedLink = youtubeEmbedUrl + youtubeId
                return (
                    <div 
                        key={index}
                    >
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={embedLink}
                            title={index}
                            frameborder="0" 
                            className="card-with-border"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen 
                        />
                    </div>
                )
            })
            const finalArray = resultArray.slice(0, 2)
            setVideos(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    useEffect(() => {
        getVideos()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Videos from YouTube" />
            
            <div className="two-columns">
                {videos}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://www.youtube.com/c/jacksonreeves/"
                    target="_blank"
                    text="Watch more videos"
                />
            </div>
        </main>
    )
}

export default YouTube