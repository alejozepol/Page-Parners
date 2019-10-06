import React from 'react';
import '../assets/styles/components/TeamCardContainer.scss';

const TeamCardContainer = ({ children, title }) => (
  <section className='teamCardContainer'>
    <h3 className='teamCardContainer__title'>{ title }</h3>
    <div className='teamCardContainer__Item'>
      {children}
    </div>
  </section>

);

export default TeamCardContainer;
