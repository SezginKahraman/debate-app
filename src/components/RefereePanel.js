import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const RefereePanel = () => {
  const [participants, setParticipants] = useState([]);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);

  useEffect(() => {
    socket.on('participants', (participants) => {
      setParticipants(participants);
    });
  }, []);

  const giveSpeakingRight = (participant) => {
    setCurrentSpeaker(participant);
    socket.emit('giveSpeakingRight', participant);
  };

  return (
    <div>
      <h2>Referee Panel</h2>
      <h3>Participants</h3>
      <ul>
        {participants.map((participant) => (
          <li key={participant}>
            {participant} 
            <button onClick={() => giveSpeakingRight(participant)}>Give Speaking Right</button>
          </li>
        ))}
      </ul>
      {currentSpeaker && (
        <div>
          <h3>Current Speaker: {currentSpeaker}</h3>
        </div>
      )}
    </div>
  );
};

export default RefereePanel;