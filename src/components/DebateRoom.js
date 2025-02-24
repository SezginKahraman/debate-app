import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import generateRandomUsername from '../utilities/usernameGenerator';

const socket = io('http://localhost:5000');

const DebateRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const newUsername = generateRandomUsername();
    setUsername(newUsername);
    socket.emit('join', newUsername);  // Katılımcıyı ekle
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('currentSpeaker', (speaker) => {
      setCurrentSpeaker(speaker);
    });
  }, []);

  const sendMessage = () => {
    socket.emit('message', input);
    setInput('');
  };

  return (
    <div>
      <h2>Debate Room</h2>
      <h2>User {username}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index + 1}>{msg}</div>
        ))}
      </div>
      {currentSpeaker && <h3>Current Speaker: {currentSpeaker}</h3>}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={currentSpeaker !== username}
      />
      <button onClick={sendMessage} disabled={currentSpeaker !== username}>Send</button>
    </div>
  );
};

export default DebateRoom;