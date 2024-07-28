// src/components/ResetPassword.js

import React, { useState } from 'react';
import { sendResetEmail } from '../utils/email';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    sendResetEmail(email);
  };

  return (
    <div className="reset-password">
      <h2>Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleReset}>Send Reset Link</button>
    </div>
  );
};

export default ResetPassword;