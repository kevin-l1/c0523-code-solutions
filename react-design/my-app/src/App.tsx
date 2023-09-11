import React from 'react';
import './App.css';
import RBanner from './RBanner.js';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RBanner items={items} />
      </header>
    </div>
  );
}

export default App;
