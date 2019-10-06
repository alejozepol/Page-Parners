import React from 'react';
import '../assets/styles/components/TeamCard.scss';

const TeamCard = ({ img, name, position, socialMedia }) => (
  <div className='teamCard'>
    <div className='teamCard__img'>
      <img src={img} alt={name} />
    </div>
    <div className='teamCard__date'>
      <h3>{ name }</h3>
      {position.map((p) => <p>{ p }</p>)}
    </div>
    <div className='teamCard__socialMedia'>
      {socialMedia.map((s) => { 
        if (s.url !== '') {
          return (
            <a href={s.url} target='_blank' rel='noopener noreferrer'>
              <img src={s.icon} alt={s.name} />
            </a>
          );
        }
      })}

    </div>
  </div>

);

export default TeamCard;
