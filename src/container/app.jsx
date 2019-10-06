import React from 'react';
import UseInitialState from '../hooks/UseInitialState';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TextBlock from '../components/TextBlock';
import BlockImg from '../components/BlockImg';
import TeamCardContainer from '../components/TeamCardContainer';
import TeamCard from '../components/TeamCard';

const App = () => {

  const initialState = UseInitialState();
  console.log(initialState);
  return (
    <div className='app'>
      <Header />
      <Hero />
      { initialState.initBlock.map((item) => <TextBlock key={item.id} {...item} />) }
      { initialState.BlockImg.map((item) => <BlockImg key={item.id} {...item} />) }
      <TeamCardContainer title='Equipo'>
        { initialState.team.map((item) => <TeamCard key={item.id} name={item.name} img={item.img} position={ item.position.map((p) => p)} socialMedia={item.socialMedia.map((s) => s)} />) }
      </TeamCardContainer>
    </div>
  );
};
export default App;

