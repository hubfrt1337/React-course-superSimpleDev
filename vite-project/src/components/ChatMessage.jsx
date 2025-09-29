import robotImg from '../assets/robot.png'
import userImg from '../assets/profile-1.jpg'
import './ChatMessage.css'
export default function ChatMessage({message, sender}) {
    console.log(userImg)
    return (
        <div className={sender === "robot" 
            ? "robot-message-container"
            : "user-message-container"
        }>
            {sender === "robot" && (
            <img src={robotImg} className="icon"
                />
            )}
            <div className="message-text">
                {message}
            </div>
            {sender === "user" && (
            <img src={userImg} className="icon" 
            />
            )}
        </div>
    );
}
