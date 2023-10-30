import TracieAvatar from './TracieAvatar.png'
import React, { useState, useEffect, useRef } from 'react';
import FloatingDialogue from './Component/FloatingDialogue/floatingDialogue';
import './App.css';

import ChatBox from './Component/ChatBox/chatBox';
function App() {
  const [isMyComponentVisible, setIsMyComponentVisible] = useState(false);

  const handleOnClick = () => {
    console.log("Hello There from the chat icon");  
    setIsMyComponentVisible(!isMyComponentVisible);  
  }

  return (
    <div className="App">
        <div className="chat-icon" onClick={handleOnClick}>
          <ChatBox className={isMyComponentVisible ? 'visible' : 'hidden'} />
          {
          <img src={TracieAvatar} id="image" className="ChatBot" alt="ChatBot" />      
          }
        </div>
      <FloatingDialogue message="Hello! How can we assist you?" />
    </div>
  );
}

export default App;