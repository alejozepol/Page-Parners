import React from 'react';
import '../assets/styles/components/TeamCardContainer.scss';

const TeamCardContainer = ({ children, title }) => (
  <section className='teamCardContainer'>
    <h3>{ title }</h3>
    {children}
  </section>

);

export default TeamCardContainer;
