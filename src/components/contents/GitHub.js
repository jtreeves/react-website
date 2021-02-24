import { useState, useEffect } from 'react'
import axios from 'axios'

import convertTime from '../../utilities/time'
import SectionHeading from '../sections/SectionHeading'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL
const link = 'https://github.com/'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function getCommits() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/github'
            )
            const resultArray = result.data.commits.map((commit, index) => {
                if (commit.payload.commits) {
                    const fullLink = link + commit.repo.name
                    const date = commit.created_at
                    const correctTime = convertTime(date)
                    const message = commit.payload.commits[0].message
                    const source = commit.repo.name
                    return (
                        <div 
                            key={index}
                            className="git-card"
                        >
                            <div className="git-card-body">
                                <p>
                                    {message}<br />

                                    <a 
                                        href={fullLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <em>
                                            — {source}
                                        </em>
                                    </a>
                                </p>
                            </div>

                            <div 
                                className="git-card-footer"
                            >
                                <div 
                                    className="git-card-button"
                                >
                                    <Button 
                                        link={fullLink}
                                        target="_blank"
                                        text="View repo"
                                    />
                                </div>

                                <div 
                                    className="git-card-date"
                                >
                                    <a 
                                        href={fullLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        {correctTime}
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return null
                }
            })
            const filteredArray = resultArray.filter(
                element => element != null
            )
            setCommits(filteredArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Commits" />
            
            <div className="projects-list">
                {commits.slice(0, 3)}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://github.com/jtreeves"
                    target="_blank"
                    text="Read more commits"
                />
            </div>
        </main>
    )
}

export default GitHub