// src/contexts/UserContext.js

import React, { createContext, useState, useContext } from 'react';
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from '../utilities/email';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [users, setUsers] = useState([
        { id: 1, username: 'admin', email: 'admin@example.com', password: 'admin123', role: 'admin' },
        { id: 2, username: 'user', email: 'user@example.com', password: 'user123', role: 'user' }
    ]);
  
    const [friends, setFriends] = useState([]);

    const addFriend = (username) => {
    if (!friends.includes(username)) {
        setFriends([...friends, username]);
    }
    };

  const register = async (username, password, email) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = { username, password: hashedPassword, email, verified: false };
    setUsers([...users, newUser]);
    sendVerificationEmail(email);
  };

  const verifyEmail = (email) => {
    setUsers(users.map(user =>
      user.email === email ? { ...user, verified: true } : user
    ));
  };

  const login = async (username, password) => {
    const user = users.find((u) => u.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
      if (user.verified) {
        setCurrentUser(user);
      } else {
        alert('Please verify your email before logging in.');
      }
    } else {
      alert('Invalid username or password');
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ users, currentUser, register, login, logout, verifyEmail, addFriend }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);