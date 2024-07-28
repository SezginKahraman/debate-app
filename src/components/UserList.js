// src/components/UserList.js

import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import '../styles/UserList.css';

const UserList = ({ users }) => {
  const { addFriend } = useContext(UserContext);

  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.map((user, index) => (
        <div key={index} className="user">
          <p>{user.username}</p>
          <button onClick={() => addFriend(user.username)}>Add Friend</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;