import { useState, useEffect } from 'react'
import axios from 'axios'

import YouTubeCard from '../cards/YouTubeCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'

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
                        <YouTubeCard 
                            source={embedLink}
                            index={index}
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
            
            <div 
                className="two-columns"
                id="youtube-cards"
            >
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