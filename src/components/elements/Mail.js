import axios from 'axios'
import { useState } from 'react'

import FormGroup from './FormGroup'

const appServer = process.env.REACT_APP_SERVER_URL

function Mail() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    
    function handleName(e) {
        setName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleSubject(e) {
        setSubject(e.target.value)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }

    async function hanldeSubmit(e) {
        e.preventDefault()
        try {
            const result = await axios.post(
                appServer + '/mail', {
                    name, email, subject, message
                }
            )
            alert(result.data.msg)
            setName('') 
            setEmail('') 
            setSubject('') 
            setMessage('') 
        } catch (error) {
            alert(error)
        }
    }
    
    return (
        <form onSubmit={hanldeSubmit}>
            <FormGroup
                type="text"
                label="name"
                value={name}
                display="Name"
                onChange={handleName}
            />
            <FormGroup
                type="email"
                label="email"
                value={email}
                display="Email"
                onChange={handleEmail}
            />
            <FormGroup
                type="text"
                label="subject"
                value={subject}
                display="Subject"
                onChange={handleSubject}
            />
            <label htmlFor="message">Message</label>
            <textarea
                name="message" 
                cols="30" 
                rows="10" 
                value={message}
                onChange={handleMessage}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Mail