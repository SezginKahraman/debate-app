// src/actions/userActions.js

export const login = (username, password) => ({
    type: 'LOGIN',
    payload: { username, password }
  });
  
  export const register = (user) => ({
    type: 'REGISTER',
    payload: user
  });
  
  export const updateUser = (user) => ({
    type: 'UPDATE_USER',
    payload: user
  });