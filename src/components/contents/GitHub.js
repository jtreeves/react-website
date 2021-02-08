import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'
import convertTime from '../../utilities/time'

const appServer = process.env.REACT_APP_SERVER_URL
const link = 'https://github.com/'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function getCommits() {
        try {
            const result = await axios.get(
                appServer + '/github'
            )
            const resultArray = result.data.commits.map((commit, index) => {
                if (commit.payload.commits) {
                    const fullLink = link + commit.repo.name
                    const date = commit.created_at
                    const correctTime = convertTime(date)
                    const message = commit.payload.commits[0].message
                    const source = commit.repo.name
                    if (index < 15) {
                        return (
                            <div 
                                key={index}
                            >
                                <Card 
                                    image={false}
                                    title={false}
                                    subtitle={false}
                                    danger={false}
                                    list={false}
                                    text={message}
                                    source={source}
                                    cloud={false}
                                    link={fullLink}
                                    button="View repo"
                                    otherLink={false}
                                    otherButton={false}
                                    time={correctTime}
                                />
                            </div>
                        )
                    } else {
                        return null
                    }
                } else {
                    return null
                }
            })
            setCommits(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])
    
    return (
        <div className="right-column">
            <h3>GitHub</h3>

            {commits}
            
            <a 
                href="https://github.com/jtreeves" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center social"
                >
                    Read more commits
                </button>
            </a>
        </div>
    )
}

export default GitHub