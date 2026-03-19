import robotProfileImage from '../assets/robot-avatar.png';
import userProfileImage from '../assets/user-avatar.png';
import './ChatMessages.css';

export function ChatMessage({ message, sender }) {
    // const {message, sender} = props;
    // const message = props.message;
    // const sender = props.sender;
    /* if(sender === 'robot') {
      return (
        <div>
          {message}
          <img src={robotProfileImage} alt="Robot Avatar" />
        </div>
      );
    } */

    return (
        <div className={
            sender === 'user'
                ? 'chat-message-user'
                : 'chat-message-robot'
        } >
            {sender === "robot" && (
                <img src={robotProfileImage} alt="Robot Avatar" className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
                <img src={userProfileImage} alt="User Avatar" className="chat-message-profile" />
            )}
        </div>
    );
}
