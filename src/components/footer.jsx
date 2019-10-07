import React from 'react';
import '../assets/styles/components/Footer.scss';
import bgfooter from '../assets/static/fondoFooter.png';
import Logo from '../assets/static/Logo.png';

const Footer = () => {
  return (
    <footer className='Footer'>
      <img className='Footer__bg' src={bgfooter} alt='Logo Parners' />
      <div className='Footer__contenido'>
        <img src={Logo} alt='Logo Parners' />
        <p>Entrenemos juntos </p>
        <p>Conectamos a las personas a través del deporte;</p>
        <p>descubre, conectate y practica tu deporte favorito con personas como tu.</p>    
      </div>
    </footer>
  );
};
export default Footer;
