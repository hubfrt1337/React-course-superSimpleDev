import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatComponents } from './components/ChatComponents';
import {Chatbot} from 'supersimpledev'
import './App.css'

function App() {
  useEffect(() => {
    Chatbot.addResponses({"what dish do you like the most": "I love spaghetti"})
  }, [])
  const [chatMessages, setChatMessage] = useState(JSON.parse(localStorage.getItem("messages")) || []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages))
  }, [chatMessages])
  return (
    <div className="container">
    <div className="info"> {chatMessages.length === 0 
      ? "Welcome to the chatbot project. Send a message using the textbox below!" 
      : ""}</div>
    <ChatComponents
    chatMessages={chatMessages}
    setChatMessage={setChatMessage}
    />
    <ChatInput
    chatMessages={chatMessages}
    setChatMessage={setChatMessage}
    />
    </div>
  );
}

export default App
