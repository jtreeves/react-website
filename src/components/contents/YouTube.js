import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Medium() {
    const [videos, setVideos] = useState([])

    async function getVideos() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/medium'
            )
            const resultArray = result.data.videos.map((video, index) => {
                const date = convertTime(video.published_timestamp)
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={video.cover_image}
                                title={video.title}
                                subtitle={false}
                                lead={false}
                                danger={false}
                                list={false}
                                text={video.description}
                                source={false}
                                cloud={false}
                                link={video.url}
                                button="View full video"
                                otherLink={false}
                                otherButton={false}
                                time={date}
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

export default Medium