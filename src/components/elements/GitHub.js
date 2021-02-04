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
            const resultDataArray = resultData.map((commit, index) => {
                return (
                    <div key={index}>
                        {commit.payload.commits[0].message}
                        Link: {commit.repo.name}
                    </div>
                )
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