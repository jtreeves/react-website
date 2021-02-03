import { useState, useEffect } from 'react'
import axios from 'axios'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function gettingInfo() {
        const result = await axios.get('https://api.github.com/users/jtreeves/events')
        const resultData = result.data
        const resultDataArray = resultData.map((commit, index) => {
            return (
                <div key={index}>
                    {commit.id}
                </div>
            )
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