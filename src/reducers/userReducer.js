// src/reducers/userReducer.js

const initialState = {
    currentUser: null,
    users: [
      { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' },
      { id: 2, username: 'user', email: 'user@example.com', password: 'user123', role: 'user' }
    ]
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          currentUser: state.users.find(user => user.username === action.payload.username && user.password === action.payload.password)
        };
      case 'REGISTER':
        return {
          ...state,
          users: [...state.users, action.payload]
        };
      case 'UPDATE_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.payload.id ? action.payload : user
          ),
          currentUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;