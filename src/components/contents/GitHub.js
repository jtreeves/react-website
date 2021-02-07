import { useState, useEffect } from 'react'
import axios from 'axios'

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
                    if (index < 20) {
                        return (
                            <div 
                                key={index}
                                className="card card-lock card-connect"
                            >
                                <div className="card-body">
                                    {commit.payload.commits[0].message}
                                    <div
                                        className="blockquote-footer"
                                    >
                                        {commit.repo.name}
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a 
                                        href={fullLink} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        <button className="btn btn-primary float-left">
                                            View repo
                                        </button>
                                    </a>
                                    <div className="float-right text-muted card-footer-connect">
                                        {correctTime}
                                    </div>
                                </div>
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
        <div className="github">
            {commits}
        </div>
    )
}

export default GitHub