import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import UseInitialState from '../hooks/UseInitialState';

const App = () => {

  const initialState = UseInitialState();
  console.log(initialState);
  return (
    <div className='app'>
      <Header />
      <Hero />
      { initialState.initBlock.map((item) => <TextBlock key={item.id} {...item} />) }
    </div>
  );
};
export default App;

