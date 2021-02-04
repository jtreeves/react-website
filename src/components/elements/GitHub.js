import { useState, useEffect } from 'react'
import axios from 'axios'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function gettingInfo() {
        const result = await axios.get('https://api.github.com/users/jtreeves/events')
        const resultData = result.data
        const resultDataArray = resultData.map((commit, index) => {
            if (commit.payload.commits) {
                return (
                    <div key={index}>
                        {commit.payload.commits[0].message}
                        Link: {commit.repo.name}
                    </div>
                )
            }
        })
        setCommits(resultDataArray)
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