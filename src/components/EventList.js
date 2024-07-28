import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinEvent, approveParticipant } from '../actions/eventActions';
import '../styles/EventList.css';

const EventList = () => {
  const events = useSelector((state) => state.event.events);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleJoin = (eventId) => {
    if (currentUser) {
      dispatch(joinEvent(eventId, currentUser.id));
    } else {
      alert('Please log in to join the event');
    }
  };

  const handleApprove = (eventId, userId) => {
    dispatch(approveParticipant(eventId, userId));
  };

  return (
    <div className="event-list">
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id} className="event">
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <button onClick={() => handleJoin(event.id)}>Join</button>
          <div className="participants">
            <h4>Participants</h4>
            {event.participants.map((participant, index) => (
              <div key={index} className="participant">
                <p>{participant.userId}</p>
                {!participant.approved && currentUser && currentUser.role === 'admin' && (
                  <button onClick={() => handleApprove(event.id, participant.userId)}>Approve</button>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;