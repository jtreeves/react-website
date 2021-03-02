import { useState, useEffect } from 'react'
import axios from 'axios'

import GitHubCard from '../elements/GitHubCard'
import Button from '../elements/Button'
import SectionHeading from '../sections/SectionHeading'
import convertTime from '../../utilities/time'

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
                        >
                            <GitHubCard 
                                message={message}
                                source={source}
                                time={correctTime}
                                link={fullLink}
                            />
                        </div>
                    )
                } else {
                    return null
                }
            })
            const filteredArray = resultArray.filter(
                element => element != null
            )
            const finalArray = filteredArray.slice(0, 3)
            setCommits(finalArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Commits from GitHub" />
            
            <div className="three-columns">
                {commits}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://github.com/jtreeves"
                    target="_blank"
                    text="View more commits"
                />
            </div>
        </main>
    )
}

export default GitHub