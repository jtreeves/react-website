import { useState } from 'react'
import axios from 'axios'

import FormItem from '../elements/FormItem'

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
            alert(error.response.data.msg)
        }
    }
    
    return (
        <form 
            onSubmit={hanldeSubmit}
            className="card card-body card-lock"
        >
            <FormItem
                type="text"
                label="name"
                value={name}
                placeholder="Your Name"
                display="Name"
                onChange={handleName}
            />

            <FormItem
                type="email"
                label="email"
                value={email}
                placeholder="your@email.com"
                display="Email"
                onChange={handleEmail}
            />

            <FormItem
                type="text"
                label="subject"
                value={subject}
                placeholder="Your specific subject"
                display="Subject"
                onChange={handleSubject}
            />
            
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    name="message" 
                    cols="30" 
                    rows="10" 
                    value={message}
                    placeholder="Your general message can be as long as you would like."
                    onChange={handleMessage}
                    className="form-control"
                />
            </div>

            <button 
                type="submit"
                className="btn btn-primary center"
            >
                Submit
            </button>
        </form>
    )
}

export default Mail