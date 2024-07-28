import React, { createContext, useState, useContext } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const createEvent = (name, description) => {
    const newEvent = { id: Date.now(), name, description, participants: [], comments: [], images: [] };
    setEvents([...events, newEvent]);
  };

  const joinEvent = (eventId, userId) => {
    setEvents(events.map(event =>
      event.id === eventId ? { ...event, participants: [...event.participants, { userId, approved: false }] } : event
    ));
  };

  const approveParticipant = (eventId, userId) => {
    setEvents(events.map(event =>
      event.id === eventId ? {
        ...event, participants: event.participants.map(participant =>
          participant.userId === userId ? { ...participant, approved: true } : participant
        )
      } : event
    ));
  };

  return (
    <EventContext.Provider value={{ events, createEvent, joinEvent, approveParticipant }}>
      {children}
    </EventContext.Provider>
  );
};
export const useEventContext = () => useContext(EventContext);