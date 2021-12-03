import React from 'react';

import logofb from '../../assets/icones/facebook.png';
import logoig from '../../assets/icones/instagram.png';
import logotw from '../../assets/icones/twitter.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer className='main-footer'>
      <div className='footer-socials'>
        <img src={logofb} className='logo-socials' alt='logo facebook' />
        <img src={logotw} className='logo-socials' alt='logo twitter' />
        <img src={logoig} className='logo-socials' alt='logo instagram' />
      </div>
    </footer>
  );
};

export default Footer;
