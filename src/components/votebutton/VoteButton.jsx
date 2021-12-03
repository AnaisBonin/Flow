import React, { useState } from 'react';

import './VoteButton.css';

const VoteButton = ({ index }) => {
  const [voteResult, setVoteResult] = useState(0);
  const handleCount = () => setVoteResult(voteResult + 1);

  return (
    <div className='vote-button'>
      <button type='button' onClick={handleCount}>
        Like
      </button>
      <p className='vote-result'>{voteResult}</p>
    </div>
  );
};

export default VoteButton;
