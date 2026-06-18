import React from 'react';
import Hero from './pages/hero';
import Experiences from './pages/experiences';
import Promo from './pages/promo';
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
