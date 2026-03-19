
import { useEffect, useRef } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null);

    useEffect(() => {
        const containerElement = chatMessagesRef.current;
        if (containerElement) {
            containerElement.scrollTop = containerElement.scrollHeight;
        }
    }, [chatMessages]); // Whenever chatMessages changes, the useEffect hook will run and scroll the chat messages container to the bottom.

    return (
        <div ref={chatMessagesRef} className="chat-messages-container">
            {chatMessages.map((chatMessage) => (
                <ChatMessage
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                />
            ))}
        </div>
    )
}
