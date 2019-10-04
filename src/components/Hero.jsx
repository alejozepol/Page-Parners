import React from 'react';
import '../assets/styles/components/Hero.scss';
import BgHero from '../assets/static/hero510.png';

const Hero = () => (
  <section className='Hero'>
    <img src={BgHero} alt='imagen deportiva' />
    <div className='Hero__title'>
      <h2>Entrenemos Juntos</h2>
    </div>
    <div className='Hero__subTitle'>
      <h3>Descubre</h3>
      <p>-</p>
      <h3>Conecta</h3>
      <p>-</p>
      <h3>Practica</h3>
    </div>
    <div className='Hero__button'>
      <button type='button'>Demo</button>
      <button type='button'>Descubre Mas</button>
    </div>
  </section>
);

export default Hero;
