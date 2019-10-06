/* eslint-disable class-methods-use-this */
import React from 'react';
import '../assets/styles/components/Button.scss';

const Button = (isTrue, text, url) => {
  return (
    <div className='HolaMundo'>
      {isTrue ? <a type='button' href='x' className='btn btn-blanco'>{text}</a> : <a type='button' href={url} className='btn btn-blanco-out'>{text}</a>}
    </div>
  );
};

export default Button;
