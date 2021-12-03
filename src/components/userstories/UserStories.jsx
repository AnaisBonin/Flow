import React, { useState } from 'react';

import './UserStories.css';

const UserStories = ({
  parentId,
  userStories,
  setUserStories,
  userMusic,
  setUserMusic,
}) => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [musicTitle, setMusicTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmissionStory = async (e) => {
    e.preventDefault();
    let userStory = {
      title: title,
      story: story,
    };
    setUserStories([...userStories, userStory]);
  };

  const handleSubmissionSong = async (e) => {
    e.preventDefault();
    let userSong = {
      musicTitle: musicTitle,
      artist: artist,
    };
    setUserMusic([...userMusic, userSong]);
  };

  return (
    <div className='user-stories'>
      <h3>LET IT FLOW</h3>
      <h4 className='user-story-h4'>Post your own story</h4>
      <form
        className='user-stories-countainer'
        onSubmit={(e) => handleSubmissionStory(e)}
      >
        <label htmlFor='title'> Title </label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor='story'> Story </label>
        <textarea
          id='story'
          onChange={(e) => setStory(e.target.value)}
          value={story}
          title='story'
          required='required'
        ></textarea>
        <button type='submit' className='btn'>
          {' '}
          Post{' '}
        </button>
      </form>
      <h4 className='user-story-h4'>Suggest another song</h4>
      <form
        className='user-stories-countainer'
        onSubmit={(e) => handleSubmissionSong(e)}
      >
        <label htmlFor='musicTitle'> Title </label>
        <input
          type='text'
          id='musicTitle'
          value={musicTitle}
          onChange={(e) => setMusicTitle(e.target.value)}
          required
        />
        <label htmlFor='artist'> Artist </label>
        <textarea
          id='artist'
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
          title='artist'
          required='required'
        ></textarea>
        <button type='submit' className='btn'>
          {' '}
          Post{' '}
        </button>
      </form>
    </div>
  );
};

export default UserStories;
