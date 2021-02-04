import { useState, useEffect } from 'react'
import axios from 'axios'

const appServer = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [posts, setPosts] = useState([])

    async function gettingInfo() {
        try {
            const result = await axios.get(
                appServer + '/tumblr'
            )
            console.log(`RESULT: ${result}`)
            console.log(`RESULT KEYS: ${Object.keys(result)}`)
            console.log(`RESULT.DATA: ${result.data}`)
            console.log(`RESULT.DATA KEYS: ${Object.keys(result.data)}`)
            const resultData = result.data
            const resultDataArray = resultData.commits.map((post, index) => {
                return (
                    <div key={index}>
                        {post.title}
                    </div>
                )
            })
            setPosts(resultDataArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        gettingInfo()
    }, [])
    
    return (
        <div>
            {posts}
        </div>
    )
}

export default Tumblr