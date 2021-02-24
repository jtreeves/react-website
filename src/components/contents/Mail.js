import { useState } from 'react'
import axios from 'axios'

import FormItem from '../elements/FormItem'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

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
                REACT_APP_SERVER_URL + '/mail', {
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
            className="mail-card"
        >   
            <p>
                Thanks for visiting my site! If you'd like to work together or just want to drop me a line, feel free to use the below form.
            </p>

            <div className="mail-input-sections">

            
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
            
            <div className="mail-section">
                <label 
                    htmlFor="message"
                    className="mail-label"
                >
                    <strong>
                        Message
                    </strong>
                </label>

                <div className="mail-input">
                    <textarea
                        name="message" 
                        cols="30" 
                        rows="10" 
                        value={message}
                        placeholder="Your general message can be as long as you would like."
                        onChange={handleMessage}
                        className="mail-input-inner"
                    />
                </div>
            </div>

            </div>
            <div className="blank-space" />

            <button 
                type="submit"
                className="blue-button center"
            >
                Send
            </button>
        </form>
    )
}

export default Mail