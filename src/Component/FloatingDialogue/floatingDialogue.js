import React, { useState, useEffect } from 'react';
import './floatingDialogue.css';

function FloatingDialogue({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? <div className="floating-dialogue">{message}</div> : null;
}

export default FloatingDialogue;