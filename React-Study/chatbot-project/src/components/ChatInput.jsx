import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    // inputText is a state variable that holds the current value of the input field. 
    // setInputText is a function that updates the value of inputText.
    const [inputText, setInputText] = useState('');

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            }
        ];
        setChatMessages(newChatMessages);
        const chatBotResponse = Chatbot.getResponse(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: chatBotResponse,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ]);
        setInputText('');
    }
    return (
        <div className="chat-input-container">
            <input
                type="text"
                placeholder="Type your message here..."
                size="30"
                onChange={saveInputText}
                value={inputText}
                className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">Send</button>
        </div>
    );
}
