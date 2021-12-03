import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Lyrics.css';

const Lyrics = ({ chosenSingle, chosenArtist }) => {
  const [lyricsMusics, setLyricsMusics] = useState('');
  const apiArtist = chosenArtist.replace(/ /g, '+');
  const apiSingle = chosenSingle.replace(/ /g, '+');

  const getLyricsFromApi = () => {
    axios
      .get(`https://api.lyrics.ovh/v1/${apiArtist}/${apiSingle}`)
      .then((response) => setLyricsMusics(response.data))
      .catch((err) => setLyricsMusics('No Lyrics Available'));
  };

  useEffect(getLyricsFromApi, [apiArtist, apiSingle]);

  return (
    <section className='lyrics-countainer'>
      <h1>{chosenSingle}</h1>
      <div className='lyrics-and-story'>
        <div>
          <h4>Paroles</h4>
          <p className='lyrics-content'>
            {lyricsMusics === 'No Lyrics Available'
              ? 'Sorry no lyrics available'
              : lyricsMusics.lyrics}
          </p>
        </div>
        <div className='top-story'>
          <h4>Top Story</h4>
          <p className='top-story-content'>
            Elle s'était évadée. Face au ciel, couchée parmi les fleurs, elle
            regardait défiler les nuages pendant des heures. L'un après l'autre.
            Encore un. Un dernier... Mais voilà que son regard se perdait dans
            une nouvelle forme aux contours indéfinis, dans les méandres de
            coton blanc qui constituent ces moutons du ciel, si loin, si loin
            d'elle... Elle aimerait les rejoindre, devenir un petit cumulus, ou
            bien gronder comme un cumulonimbus, ou encore rejoindre un troupeau
            d'altocumulus... Elle ne connaît pas ces noms, ça n'est pas grave,
            elle n'a pas besoin de savoir ; car aujourd'hui, elle s'est évadée
            et à présent elle regarde le ciel bleu et blanc, couchée parmi les
            fleurs. Bientôt, le parfum des bleuets, des lilas, des lavandes, des
            pervenches lui font l'effet d'un somnifère ; les fleurs sont bleues,
            le ciel est clair, elle coule dans un océan turquoise, en touche le
            fond et s'endort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Lyrics;
