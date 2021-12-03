import React, { useState } from 'react';

import PostedMusic from '../postedmusic/PostedMusic';
import PostedStories from '../postedstories/PostedStories';
import UserStories from '../userstories/UserStories';

import './EspaceFlow.css';

const EspaceFlow = () => {
  const [userStories, setUserStories] = useState([
    {
      title: 'Une matinée assoupie',
      story: `C'était un soir d'été, je me baladais dans les sous bois près de chez moi. Je sens encore le parfum du printemps qui éveillait aux aurores. Le son chantant des moineaux amoureux venait tourmenter l'état endormi, des colombes assoupies perchées sur la branche d'un saule meurtri.`,
    },
    {
      title: 'Balade',
      story: `Longue marche, Sans que le ciel Ne bouge. Aller pieds nus sur les rochers un danger agréable. Au bord de l’eau poussent des fleurs sur les maillots de bain.`,
    },
    {
      title: 'Les amoureux',
      story: `L'eau qui caresse le rivage, La rose qui s'ouvre au zéphir, Le vent qui rit sous le feuillage, Tout dit qu'aimer est un plaisir. De deux amants l'égale flamme Sait doublement les rendre heureux. Les indifférents n'ont qu'une âme ; Mais lorsqu'on aime, on en a deux.`,
    },
  ]);

  const [userMusic, setUserMusic] = useState([
    {
      musicTitle: 'Easy on Me',
      artist: 'Adele',
    },
    {
      musicTitle: 'One Thing',
      artist: 'One Direction',
    },
    {
      musicTitle: 'Adventure of a Lifetime',
      artist: 'Coldplay',
    },
  ]);

  return (
    <>
      <section className='espace-flow'>
        <h2>Flow Space</h2>
        <p id='letgo'>Let everything go</p>
        <p>
          Music is meant to make you feel, dream, hope. As artists, we write
          albums to tell a story. Flow is an app that is meant for you to also
          tell your own story. To tell us how you feel. Let the words pour out
          of your heart and let your soul feel how music vibrations take you to
          another dimension.
        </p>
        <div className='espace-flow-post-countainer'>
          <div>
            {userStories.map(({ title, story }, index) => (
              <PostedStories key={index} title={title} story={story} />
            ))}
          </div>
          <div className='posted-stories-music'>
            {userMusic.map(({ musicTitle, artist }, index) => (
              <PostedMusic
                key={index}
                index={index}
                musicTitle={musicTitle}
                artist={artist}
                setUserMusic={setUserMusic}
              />
            ))}
            <UserStories
              serStories={userStories}
              setUserStories={setUserStories}
              userMusic={userMusic}
              setUserMusic={setUserMusic}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EspaceFlow;
