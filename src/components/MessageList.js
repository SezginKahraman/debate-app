// src/components/MessageList.js

import React, { useContext } from 'react';
import { MessageContext } from '../contexts/MessageContext';
import '../styles/MessageList.css';

const MessageList = ({ userId }) => {
  const { messages } = useContext(MessageContext);

  return (
    <div className="message-list">
      {messages.filter(message => message.to === userId || message.from === userId).map(message => (
        <div key={message.id} className={`message ${message.from === userId ? 'sent' : 'received'}`}>
          <p>{message.content}</p>
          <span>{message.timestamp.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;