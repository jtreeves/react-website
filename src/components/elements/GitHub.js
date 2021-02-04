import { useState, useEffect } from 'react'
import axios from 'axios'

const appServer = process.env.REACT_APP_SERVER_URL

function GitHub() {
    const [commits, setCommits] = useState([])

    async function gettingInfo() {
        try {
            const result = await axios.get(
                appServer + '/github'
            )
            const resultData = result.data
            const resultDataArray = resultData.commits.map((commit, index) => {
                if (commit.payload.commits) {
                    return (
                        <div key={index}>
                            {commit.payload.commits[0].message}
                            Link: {commit.repo.name}
                            Date: {commit.created_at}
                        </div>
                    )
                } else {
                    return null
                }
            })
            setCommits(resultDataArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        gettingInfo()
    }, [])
    
    return (
        <div>
            {commits}
        </div>
    )
}

export default GitHub