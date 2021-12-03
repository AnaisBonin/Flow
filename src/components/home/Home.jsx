import React, { useState } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import MusicCategories from '../musiccategories/MusicCategories';
import AlbumList from '../albumlist/AlbumList';

import './Home.css';

const Home = () => {
  const [chosenInspiration, setChosenInspiration] = useState('Believe');
  const handleClick = (e) => setChosenInspiration(e.target.value);

  return (
    <>
      <Header />
      <main className='home-main-container'>
        <MusicCategories
          setChosenInspiration={setChosenInspiration}
          handleClick={handleClick}
        />
        <AlbumList chosenInspiration={chosenInspiration} />
      </main>
      <Footer />
    </>
  );
};

export default Home;
