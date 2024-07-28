// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // switch => Routes
import store from './store';
import HomePage from './components/HomePage';
import DebateRoom from './components/DebateRoom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import EventList from './components/EventList';
import Notification from './components/Notification';

function App() {
  return (
    <Provider store={store}>
              <Router>
                <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/debateroom" element={<DebateRoom/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/events" element={<EventList/>} />
                  <Route path="/notifications" element={<Notification/>} />
                </Routes>
              </Router>
    </Provider>
  );
}

export default App;