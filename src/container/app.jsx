import React from 'react';
import UseInitialState from '../hooks/UseInitialState';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import BlockImg from '../components/BlockImg';

const App = () => {

  const initialState = UseInitialState();
  console.log(initialState);
  return (
    <div className='app'>
      <Header />
      <Hero />
      { initialState.initBlock.map((item) => <TextBlock key={item.id} {...item} />) }
      { initialState.BlockImg.map((item) => <BlockImg key={item.id} {...item} />) }
    </div>
  );
};
export default App;

