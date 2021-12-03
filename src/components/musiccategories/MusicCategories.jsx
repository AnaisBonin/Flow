import React from 'react';

import icone from '../../assets/icones/icone-music.png';

import './MusicCategories.css';

const MusicCategories = ({ setChosenInspiration, handleClick }) => {
  const inspirations = [
    'Believe',
    'Happy',
    'Calm',
    'Joy',
    'Danse',
    'Cry',
    'Love',
    'Relax',
    'Fight',
    'Let go',
    'Romance',
    'Play',
    'Evolve',
    'Active',
    'Silence',
  ];

  inspirations.sort();

  return (
    <section className='music-categories-section'>
      <h2>What inspires you today?</h2>
      {inspirations.map((inspiration, index) => (
        <div
          className='music-category-container'
          key={index}
          value={inspiration}
          onClick={handleClick}
        >
          <img
            src={icone}
            className='music-category-icone'
            value={inspiration}
            alt='icone musique'
            onClick={handleClick}
          />
          <button type='button' value={inspiration} onClick={handleClick}>
            {inspiration}
          </button>
        </div>
      ))}
    </section>
  );
};

export default MusicCategories;
