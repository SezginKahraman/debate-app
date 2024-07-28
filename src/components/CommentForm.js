// src/components/CommentForm.js

import React, { useState } from 'react';
import '../styles/CommentForm.css';

const CommentForm = ({ eventId, addComment }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    addComment(eventId, { text: comment, rating });
    setComment('');
    setRating(0);
  };

  return (
    <div className="comment-form">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment"
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="0"
        max="5"
        placeholder="Rating (0-5)"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentForm;