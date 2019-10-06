import React from 'react';
import '../assets/styles/components/TextBlock.scss';

const TextBlock = ({ title, content }) => (
  <section className='textBlock'>
    <div className='textBlock__title'>
      <h3>{ title }</h3>
    </div>
    <div className='textBlock__text'>
      <p>{ content }</p>
    </div>
  </section>
);

export default TextBlock;
