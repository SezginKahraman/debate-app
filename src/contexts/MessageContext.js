// src/contexts/MessageContext.js

import React, { createContext, useState } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (from, to, content) => {
    const newMessage = { id: Date.now(), from, to, content, timestamp: new Date() };
    setMessages([...messages, newMessage]);
  };

  return (
    <MessageContext.Provider value={{ messages, sendMessage }}>
      {children}
    </MessageContext.Provider>
  );
};