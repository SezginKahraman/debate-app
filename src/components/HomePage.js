// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Debate Application</h1>
      <p>Join debates, participate in events, and practice with AI.</p>
      <div className="homepage-links">
        <Link to="/register" className="homepage-link">Register</Link>
        <Link to="/login" className="homepage-link">Login</Link>
        <Link to="/debateroom" className="homepage-link">Debate Room</Link>
        <Link to="/events" className="homepage-link">Events</Link>
        <Link to="/profile" className="homepage-link">Profile</Link>
        <Link to="/notifications" className="homepage-link">Notifications</Link>
      </div>
    </div>
  );
};

export default HomePage;