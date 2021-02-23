import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'
import convertTime from '../../utilities/time'
import Square from '../elements/Square'
import SectionHeading from '../sections/SectionHeading'

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
                    const body = <div className="square-padding">{message}</div>
                    const source = commit.repo.name
                    if (index < 3) {
                        return (
                            <div 
                                key={index}
                            >
                                {/* <Card 
                                    image={false}
                                    title={false}
                                    subtitle={false}
                                    lead={false}
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
                                /> */}

                                <Square 
                                    main={body}
                                    link={fullLink}
                                    overlay="View Repo"
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
        <main>
            <SectionHeading heading="Recent Commits" />
            
            <div className="projects-list">
                {commits}
            </div>
        </main>
    )
}

export default GitHub