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
        console.log(`NAME: ${name}`)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
        console.log(`EMAIL: ${email}`)
    }

    function handleSubject(e) {
        setSubject(e.target.value)
        console.log(`SUBJECT: ${subject}`)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
        console.log(`MESSAGE: ${message}`)
    }

    function hanldeSubmit(e) {
        e.preventDefault()
        console.log(`UPON SUBMIT >> NAME = ${name}, EMAIL = ${email}, SUBJECT = ${subject}, AND MESSAGE = ${message}`)
        axios.post(
            appServer + '/mail', {
                name, email, subject, message
            }
        )
        // console.log(`RESULT: ${result}`)
        setName('') 
        setEmail('') 
        setSubject('') 
        setMessage('') 
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