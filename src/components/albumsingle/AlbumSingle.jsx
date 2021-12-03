import React from 'react';
import { Link } from 'react-router-dom';

import icone from '../../assets/icones/icone-music.png';

import './AlbumSingle.css';

const AlbumSingle = ({ name, artist, image }) => {
  return (
    <div className='album-single-countainer'>
      <img
        src={image === '' ? icone : image}
        alt={`Album representation of ${name}`}
        className='album-single-image'
      />
      <div className='album-single-info'>
        <h3>{name}</h3>
        <h4>{artist}</h4>
        <Link to={`/album/${artist}/${name}`}>
          <p>
            <span className='clean-link'> Explore</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AlbumSingle;
