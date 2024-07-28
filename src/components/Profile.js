// src/components/Profile.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/userActions';
import { useNotificationContext } from '../contexts/NotificationContext';
import '../styles/Profile.css';

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const { addNotification } = useNotificationContext();

  const [username, setUsername] = useState(currentUser?.username || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [password, setPassword] = useState(currentUser?.password || '');

  const handleUpdate = () => {
    const updatedUser = { ...currentUser, username, email, password };
    dispatch(updateUser(updatedUser));
    addNotification({ message: 'Profile updated successfully' });
  };

  if (!currentUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>Username: {currentUser.username}</p>
      <p>Email: {currentUser.email}</p>
      <p>Role: {currentUser.role}</p>

      <h3>Update Profile</h3>
      <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile;