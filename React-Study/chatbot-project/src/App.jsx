import { useState } from 'react';
import { ChatMessages } from './components/ChatMessages';
import { ChatInput} from './components/ChatInput';
import './App.css'
      
function App() {

        const [chatMessages, setChatMessages] = useState([
          {
            message: "Hello! How can I assist you today?",
            sender: "user",
            id: 'id1'
          },
          {
            message: "Hello! How can I assist you today?",
            sender: "robot",
            id: 'id2'
          },
        ]);
        
        return (
          <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />
            <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
          </div>
        );
      }

export default App
