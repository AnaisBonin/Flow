import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import './Espace.css';

const Espace = ({ parentId }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleCommentSubmission = async (e) => {
    e.preventDefault();
    let comment = {
      name: name,
      content: content,
      pId: parentId || null,
      time: new Date(),
    };
    setName('');
    setContent('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleCommentSubmission(e)}>
        <label htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor='comment'>
          Post your own story
          <textarea
            id='comment'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            name='comment'
            required='required'
            cols='45'
            rows='8'
          ></textarea>
        </label>
        <button type='submit' className='btn'>
          Post
        </button>
      </form>
    </div>
  );
};

export default Espace;
