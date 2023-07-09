import React from 'react';
import './App.css';
import AppDrawer from './AppDrawer.js';

const items = [
  'Honkai Impact 3rd',
  'Honkai: Star Rail',
  'Genshin Impact',
  'Tears of Themis',
  'Zenless Zone Zero',
];

function App() {
  return (
    <div className="App">
      <AppDrawer items={items} />
    </div>
  );
}

export default App;
