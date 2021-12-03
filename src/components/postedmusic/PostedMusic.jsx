import React from 'react';
import './PostedMusic.css';
import VoteButton from '../votebutton/VoteButton';

const PostedMusic = ({ musicTitle, artist, index }) => {
  return (
    <div className='posted-music'>
      <div>
        <h4>{musicTitle}</h4>
        <p className='posted-music-content'>{artist}</p>
      </div>
      <VoteButton index={index} />
    </div>
  );
};

export default PostedMusic;
