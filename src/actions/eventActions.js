// src/actions/eventActions.js

export const createEvent = (event) => ({
  type: 'CREATE_EVENT',
  payload: event
});

export const joinEvent = (eventId, userId) => ({
  type: 'JOIN_EVENT',
  payload: { eventId, userId }
});

export const approveParticipant = (eventId, userId) => ({
  type: 'APPROVE_PARTICIPANT',
  payload: { eventId, userId }
});