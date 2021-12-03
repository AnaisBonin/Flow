import React from 'react';

import VoteButton from '../votebutton/VoteButton';

import './PostedStories.css';

const PostedStories = ({ title, story }) => {
  return (
    <div className='posted-stories'>
      <h4>{title}</h4>
      <p className='posted-story-content'>{story}</p>
      <VoteButton />
    </div>
  );
};

export default PostedStories;
