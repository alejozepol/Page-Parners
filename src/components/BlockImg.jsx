import React from 'react';
import '../assets/styles/components/BlockImg.scss';

const BlockImg = ({ title, content, img, izquierda }) => {
  const HTMLContent = () => (
    <div>
      <div className='BlockImg__title'>
        <h3>{ title }</h3>
      </div>
      <div className='BlockImg__text'>
        <p>{ content }</p>
      </div>
      <div className='BlockImg__img'>
        <img src={img} alt={title} />
      </div>
    </div>
);

  if (izquierda) {
    return (
      <section className='BlockImg'>
        <div className='BlockImg__contenido'>
          <div className='BlockImg__title'>
            <h3>{ title }</h3>
          </div>
          <div className='BlockImg__text'>
            <p>{ content }</p>
          </div>
        </div>
        <div className='BlockImg__img'>
          <img src={img} alt={title} />
        </div>
      </section>
    );
  }
  return (
    <section className='BlockImg BlockImg--izq'>
      <div className='BlockImg--izq__contenido'>
        <div className='BlockImg__title'>
          <h3>{ title }</h3>
        </div>
        <div className='BlockImg__text'>
          <p>{ content }</p>
        </div>
      </div>
      <div className='BlockImg__img'>
        <img src={img} alt={title} />
      </div>
    </section>
  );

} ;

export default BlockImg;
