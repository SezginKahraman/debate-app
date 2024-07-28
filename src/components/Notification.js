// src/components/Notification.js

import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Notification.css';

const Notification = () => {
  const notifications = useSelector((state) => state.notification.notifications);

  return (
    <div className="notification-list">
      <h2>Notifications</h2>
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;