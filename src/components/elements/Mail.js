import axios from 'axios'
import { useState, useEffect } from 'react'

import FormGroup from './FormGroup'

const appServer = process.env.REACT_APP_SERVER_URL

function Mail() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    
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
        await axios.post(
            appServer + '/mail', {
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, subject, message
                })
            }
        )
        setName() 
        setEmail() 
        setSubject() 
        setMessage() 
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
            <FormGroup
                type="text"
                label="message"
                value={message}
                display="Message"
                onChange={handleMessage}
            />
            <button
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

export default Mail