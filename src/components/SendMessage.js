// src/components/SendMessage.js

import React, { useState, useContext } from 'react';
import { MessageContext } from '../contexts/MessageContext';
import '../styles/SendMessage.css';

const SendMessage = ({ from, to }) => {
  const [content, setContent] = useState('');
  const { sendMessage } = useContext(MessageContext);

  const handleSend = () => {
    sendMessage(from, to, content);
    setContent('');
  };

  return (
    <div className="send-message">
      <input
        type="text"
        placeholder="Type a message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default SendMessage;