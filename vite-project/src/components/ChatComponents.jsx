import { useRef, useEffect} from 'react'
import ChatMessage from './ChatMessage'
export function ChatComponents( {chatMessages}) {
    const chatMessagesRef = useAutoScroll(chatMessages)
    function useAutoScroll(dependencies){
        const containerRef = useRef(null)
        useEffect(() => {
        const containerChatElement = containerRef.current
        if(containerChatElement){
            containerChatElement.scrollTop = containerChatElement.scrollHeight;
        }
        }, [dependencies])
        return containerRef;
    }
    console.log(chatMessages)
    return (
        <div className="chat-container"
        ref={chatMessagesRef}>
        {chatMessages.map(obj => {
            return (
            <ChatMessage
                message={obj.message}
                sender={obj.sender}
                key={obj.key}
            >
            </ChatMessage>
            )
        })}
        </div>
    )
}