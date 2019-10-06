import React from 'react';
import Bogota from '../assets/static/Bogota.png';
import Bodytech from '../assets/static/Bodytech.png';
import decathlon from '../assets/static/decathlon.png';
import lfb from '../assets/static/lfb.png';
import smartfit from '../assets/static/smartfit.png';
import underArmour from '../assets/static/underArmour.png';
import '../assets/styles/components/Clients.sccs';

const Clients = () => {
  const title = 'Posibles Clientes';
  return (
    <section className='Clients'>
      <h3>{title}</h3>
      <div className='Clients__img'>
        <img src={Bogota} />
        <img src={Bodytech} />
        <img src={decathlon} />
        <img src={lfb} />
        <img src={smartfit} />
        <img src={underArmour} />
      </div>
    </section>
  );
};

export default Clients;
