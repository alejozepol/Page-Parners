import React from 'react';
import '../assets/styles/components/TeamCard.scss';

const TeamCard = ({ img, name, position, socialMedia, url }) => (
  <div className='teamCard'>
    <div className='teamCard__img'>
      <img src={img} alt={name} />
    </div>
    <div className='teamCard__date'>
      <em>
        <h3>{name}</h3>
      </em>
      {position.map((p) => <p key={p.id}>{ p }</p>)}
      <div className='teamCard__date__socialMedia'>
        {socialMedia.map((s) => {
          if (s.url !== '') {
            return (
              <a href={s.url} target='_blank' rel='noopener noreferrer' key={s.id}>
                <img src={s.icon} alt={s.name} key={s.key} />
              </a>
            );
          }
        })}
      </div>
      <div className='teamCard__button'>
        <a type='button' href={url} className='btn btn-blanco-color' target='_blank' rel='noopener noreferrer'>Ver más</a>
      </div>
    </div>
  </div>

);

export default TeamCard;
