// src/utils/email.js

export const sendVerificationEmail = (email) => {
    console.log(`Verification email sent to ${email}`);
  };
  
  export const sendResetEmail = (email) => {
    console.log(`Reset email sent to ${email}`);
  };
  
  export const sendNotificationEmail = (email, message) => {
    console.log(`Notification email sent to ${email}: ${message}`);
  };