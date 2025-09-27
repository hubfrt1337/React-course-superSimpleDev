import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import { ChatComponents } from './components/ChatComponents';
import './App.css'

function App() {
         const [chatMessages, setChatMessage] = useState([
          
        ]);
       
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
