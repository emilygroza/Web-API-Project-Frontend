import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined, InsertEmoticon } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'
import './Chat.css'
import axios from './axios'
import { useStateValue } from './StateProvider'

const Chat = ({ messages }) => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const [{ user }, dispatch] = useStateValue()

    const sendMessage = async (e) => {
        e.preventDefault()
        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: new Date().toUTCString(),
            received: true
        })
        setInput("")
    }

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`data:image/jpeg;base64,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`} />
                <div className="chat__headerInfo">
                    <h3>WEB API FINAL!</h3>
                    <p>Last seen at...{" "}
                        {messages[messages.length -1]?.timestamp}
                    </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                            {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message."
                        type="text"
                    />
                    <button onClick={sendMessage} type="submit">Send a message.</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat