import React from 'react';

const TextBlock = ({ title, content }) => (
  <section className='textBlock'>
    <div className='textBlock__title'>
      <h3>{ title }</h3>
    </div>
    <div>
      <p>{ content }</p>
    </div>
  </section>
);

export default TextBlock;
