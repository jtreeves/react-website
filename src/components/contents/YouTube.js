import { useState, useEffect } from 'react'
import axios from 'axios'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const youtubeUrl = 'https://www.youtube.com/embed/'

function YouTube() {
    const [videos, setVideos] = useState([])

    async function getVideos() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/youtube'
            )
            const resultArray = result.data.videos.items.map((video, index) => {
                const youtubeId = video.id.videoId
                const sourceLink = youtubeUrl + youtubeId
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <iframe 
                                width="100%" 
                                height="300" 
                                src={sourceLink}
                                title={index}
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                            />
                        </div>
                    )
                } else {
                    return null
                }
            })
            setVideos(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    useEffect(() => {
        getVideos()
    }, [])
    
    return (
        <div>
            <div className="contains-columns">
                <div className="left-column">
                    {videos}
                </div>
            </div>
        </div>
    )
}

export default YouTube