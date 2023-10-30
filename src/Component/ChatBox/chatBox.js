import { useState } from "react";
import React, { useRef } from 'react';
import './chatBox.css';

// const ChatBox = ({ className }) => {
//     const [isKeyboardVisible, setKeyboardVisibility] = useState(true);
//     return (
//         <div className={className}>
//             {/* <iframe id='chatbot-iframe' class="iframe-responsive" src='https://www-dev.canopyhealth.com/botscript-vip-dev/?userHealthPlan=Blue%20%26%20Gold&userHealthPlanCenter=HealthNet'></iframe> */}
//             <iframe id='chatbot-iframe' class="iframe-responsive" src='https://chatbot.hellotars.com/conv/NJba4f/'></iframe>

//         </div>
//     )
// }

// export default ChatBox;


const ChatBox = ({ className }) => {
  const inputRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      inputRef.current.blur();
    }
  };

  return (
    <div id='chatbot-iframe' className="iframe-responsive">
      <div className="chat-container">
        ChatBot <br />
      </div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type a message..."
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default ChatBox;
