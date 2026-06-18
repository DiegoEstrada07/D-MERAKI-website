import React from 'react';
import Hero from './land-sections/hero';
import Experiences from './land-sections/experiences';
import Promo from './land-sections/promo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Experiences/>
      <Promo/>
    </div>
  );
}

export default App;
