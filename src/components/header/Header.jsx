import React from 'react';

import logo from '../../assets/images/logo-flow.png';

import './Header.css';

const Header = () => {
  return (
    <header className='home-header'>
      <img src={logo} className='home-logo' alt='Logo flow' />
      <p className='home-header-slogan'>Evadez-vous par les mots</p>
    </header>
  );
};

export default Header;
