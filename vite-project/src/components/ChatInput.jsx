import { useState } from 'react'
import loadingGif from '../assets/loading-spinner.gif'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'
import ChatMessage from './ChatMessage';
export function ChatInput({chatMessages, setChatMessage}) {
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(e){
        setInputText(e.target.value);
    }

    async function sendMessage(){
        if(isLoading|| inputText === "") return;
        const newMessage = [...chatMessages,
        { 
            message: inputText,
            sender: "user",
            key: crypto.randomUUID(),
        }
        ]
        setChatMessage(newMessage)
        setInputText("")
        setChatMessage([...newMessage,
        {
            sender: "robot",
            key: crypto.randomUUID(),
            message: <img width="30px" src={loadingGif}></img>,
        }
        ])
        setIsLoading(true)
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessage([...newMessage,
        { 
            message: response,
            sender: "robot",
            key: crypto.randomUUID(),
        }
        ])
        setIsLoading(false)
    }

    function send(e){
        if(e.key === "Enter"){
        sendMessage()
        }
        if(e.key === "Escape"){
        setInputText("")
        }
    }

    function clear(){
        setChatMessage([])
    }

    return (
    <div className="input-container">
        <input 
        placeholder="Send message to a chatBot" 
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={send}
        className="text-input"
        />
        <button 
        className="send-button"
        onClick={sendMessage}
        >Send</button>
        <button 
        onClick={clear}
        className="clear-button">
            Clear
        </button>
    </div>
    )
}