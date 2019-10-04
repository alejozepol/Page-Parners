/* eslint-disable class-methods-use-this */
import React from 'react';
import '../assets/styles/components/Button.scss';

class Button {
  constructor(primary, text, url) {

    if (primary) {
      this.BtnBlancoLink(url, text);
    }

  }

  BtnBlancoLink(url, text) {
    return (
      <a className='btn' href={url} type='button' target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    );
  }
}

export default Button;
