// src/components/EventForm.js

import React, { useState, useContext } from 'react';
import { EventContext } from '../contexts/EventContext';
import FileUpload from './FileUpload';
import '../styles/EventForm.css';

const EventForm = () => {
  const { createEvent } = useContext(EventContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    createEvent(name, description, image);
    setName('');
    setDescription('');
    setImage('');
  };

  const handleFileUpload = (base64) => {
    setImage(base64);
  };

  return (
    <div className="event-form">
      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FileUpload onUpload={handleFileUpload} />
      <button onClick={handleSubmit}>Create Event</button>
    </div>
  );
};

export default EventForm;