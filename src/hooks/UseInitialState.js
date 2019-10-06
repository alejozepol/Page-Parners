import { useState, useEffect } from 'react';
import Date from '../date/contenido.json';
import img1 from '../assets/static/img1-510.png';
import img2 from '../assets/static/img2-510.png';
import img3 from '../assets/static/img3-510.png';
import img4 from '../assets/static/img4-510.png';

const UseInitialSatete = () => {
  const [initalState, setinitalState] = useState(Date);
  initalState.BlockImg[0].img = img1;
  initalState.BlockImg[1].img = img2;
  initalState.BlockImg[2].img = img3;
  initalState.BlockImg[3].img = img4;
  return initalState;
};

export default UseInitialSatete;
