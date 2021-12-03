import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import EspaceFlow from '../espaceflow/EspaceFlow';
import Lyrics from '../lyrics/Lyrics';
import Footer from '../footer/Footer';
import Album from '../album/Album';

import './AlbumPage.css';

const AlbumPage = () => {
  const params = useParams();

  const artist = params.artist;
  const album = params.album;

  const [chosenSingle, setChosenSingle] = useState('');
  const [chosenArtist, setChosenArtist] = useState('');

  const handleSingleChoice = (e) => setChosenSingle(e.target.value);

  return (
    <div>
      <Album
        artist={artist}
        album={album}
        setChosenSingle={setChosenSingle}
        setChosenArtist={setChosenArtist}
        handleSingleChoice={handleSingleChoice}
      />
      <Lyrics chosenSingle={chosenSingle} chosenArtist={chosenArtist} />
      <EspaceFlow />
      <Footer />
    </div>
  );
};

export default AlbumPage;
