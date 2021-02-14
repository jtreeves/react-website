import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import extractFromPost from '../../utilities/post'
import convertTime from '../../utilities/time'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [thoughts, setThoughts] = useState([])
    const [notes, setNotes] = useState([])

    async function getThoughts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr/thoughts'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const body = post.body
                const date = post.date
                const textSubstrings = extractFromPost(body, 50)
                const correctTime = convertTime(date)
                if (index < 5) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={textSubstrings.image}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={true}
                                list={false}
                                text={textSubstrings.body}
                                source={false}
                                cloud={false}
                                link={post.post_url}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={correctTime}
                            />
                        </div>
                    )
                } else {
                    return null
                }
            })
            setThoughts(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    async function getNotes() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr/notes'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const body = post.body
                const date = post.date
                const textSubstrings = extractFromPost(body, 25)
                const correctTime = convertTime(date)
                if (index < 10) {
                    return (
                        <div 
                            key={index}
                        >
                            <Card 
                                image={false}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={true}
                                list={false}
                                text={textSubstrings.body}
                                source={false}
                                cloud={false}
                                link={post.post_url}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={correctTime}
                            />
                        </div>
                    )
                } else {
                    return null
                }
            })
            setNotes(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getThoughts()
    }, [])
    
    useEffect(() => {
        getNotes()
    }, [])
    
    return (
        <div>
            <div className="contains-columns">
                <div className="left-column">
                    <h3>Thoughts</h3>
                    {thoughts}
                </div>
                <div className="right-column">
                    <h3>Notes</h3>
                    {notes}
                </div>
            </div>
        </div>
    )
}

export default Tumblr