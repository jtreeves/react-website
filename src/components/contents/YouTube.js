import { useState, useEffect } from 'react'
import axios from 'axios'

import Square from '../elements/Square'
import SectionHeading from '../sections/SectionHeading'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

const youtubeVideoUrl = 'https://www.youtube.com/watch?v='

const youtubeImageUrl = 'https://img.youtube.com/vi/'

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
                const sourceLink = youtubeVideoUrl + youtubeId
                const youtubeImage = youtubeImageUrl + youtubeId + '/hqdefault.jpg'
                const embedLink = youtubeEmbedUrl + youtubeId
                const image = <img src={youtubeImage} alt="video" className="square-image" />
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <iframe 
                                width="100%" 
                                height="500px" 
                                src={embedLink}
                                title={index}
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen 
                            />

                            {/* <Square 
                                main={image}
                                link={sourceLink}
                                overlay="Watch Video"
                            /> */}
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
        <main>
            <SectionHeading heading="Latest Video" />
            
            {/* <div className="projects-list"> */}
                {videos}
            {/* </div> */}
        </main>
    )
}

export default YouTube