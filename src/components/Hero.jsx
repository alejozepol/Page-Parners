import React from 'react';
import BgHero from '../assets/static/hero510.png';
import '../assets/styles/components/Hero.scss';
import '../assets/styles/components/Button.scss';
import Button from './Button';

const Hero = () => {
  const urlDemo = 'http://parners.co/';
  return (
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
        <a type='button' href='x' className='btn btn-blanco'>Descubre Más</a>
        <a type='button' href={urlDemo} className='btn btn-blanco-out'>Ver Demostracion</a>
      </div>
    </section>
  );
};

export default Hero;
