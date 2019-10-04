import React from 'react';
import icoHamburger from '../assets/static/hamburger-ico.png';
import Logo from '../assets/static/Logo.png';
import Desplegable from '../assets/static/desplegable.png';
import '../assets/styles/components/Header.scss';

const Header = () =>(
  <section className='Header'>
    <div className='Header__Hamburger'>
      <img className='Header__Hamburger_img' src={icoHamburger} alt='Menu Hamburgesa' />
      <p className='Header__Hamburger_text'>Inicio</p>
    </div>
    <div className='Header__Logo'>
      <img className='Header__Logo_img' src={Logo} alt='Logo Parners' />
      <h1 className='Header__Logo_title'>Parners</h1>
    </div>
    <div className='Header__lenguaje'>
      <p className='Header__lenguaje_text'>ESP</p>
      <img className='Header__lenguaje_img' src={Desplegable} alt='Despegable' />
    </div>
  </section>
);

export default Header;
