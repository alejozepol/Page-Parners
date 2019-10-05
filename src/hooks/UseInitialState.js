import { useState, useEffect } from 'react';
import Date from '../date/contenido.json';

const UseInitialSatete = () => {
  const [initalState, setinitalState] = useState(Date);
  return initalState;
};

export default UseInitialSatete;
