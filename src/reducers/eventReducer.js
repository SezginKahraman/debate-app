// src/reducers/eventReducer.js

const initialState = {
    events: []
  };
  
  const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CREATE_EVENT':
        return {
          ...state,
          events: [...state.events, action.payload]
        };
      case 'JOIN_EVENT':
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload.eventId
              ? { ...event, participants: [...event.participants, action.payload.userId] }
              : event
          )
        };
      case 'APPROVE_PARTICIPANT':
        return {
          ...state,
          events: state.events.map(event =>
            event.id === action.payload.eventId
              ? {
                ...event,
                participants: event.participants.map(participant =>
                  participant.userId === action.payload.userId ? { ...participant, approved: true } : participant
                )
              }
              : event
          )
        };
      default:
        return state;
    }
  };
  
  export default eventReducer;