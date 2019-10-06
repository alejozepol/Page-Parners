import { useState, useEffect } from 'react';
import Date from '../date/contenido.json';
import img1 from '../assets/static/img1-510.png';
import img2 from '../assets/static/img2-510.png';
import img3 from '../assets/static/img3-510.png';
import img4 from '../assets/static/img4-510.png';
import be from '../assets/static/be.png';
import fb from '../assets/static/fb.png';
import ln from '../assets/static/ln.png';
import ig from '../assets/static/ig.png';
import gh from '../assets/static/gh.png';
import FotoFarid from '../assets/static/foto-Farid.png';
import FotoAlejandro from '../assets/static/foto-alejandro.png';
import FotoCristian from '../assets/static/foto-cristian.png';
import FotoJulian from '../assets/static/foto-Julian.png';

const UseInitialSatete = () => {
  const [initalState, setinitalState] = useState(Date);
  initalState.BlockImg[0].img = img1;
  initalState.BlockImg[1].img = img2;
  initalState.BlockImg[2].img = img3;
  initalState.BlockImg[3].img = img4;

  initalState.team.forEach((person) => {
    person.socialMedia.forEach((rs) => {
      switch (rs.name) {
        case 'be':
          rs.icon = be;
          break;
        case 'fb':
          rs.icon = fb;
          break;
        case 'ln':
          rs.icon = ln;
          break;
        case 'ig':
          rs.icon = ig;
          break;
        case 'gh':
          rs.icon = gh;
          break;

      }
    });
  });

  initalState.team[0].img = FotoFarid;
  initalState.team[1].img = FotoAlejandro;
  initalState.team[2].img = FotoCristian;
  initalState.team[3].img = FotoJulian;
  return initalState;
};

export default UseInitialSatete;
