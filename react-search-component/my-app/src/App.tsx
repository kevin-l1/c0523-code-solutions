import React from 'react';
import './App.css';
import List from './RenderedList.js';

const list = [
  'I like eating lots of food.',
  'Apple a day keeps the doctors away.',
  'Roasting a marshmallow makes it taste better.',
  'Note that the development build is not optimized.',
  'Each child in a list should have a unique key prop.',
  'The message channel closed before a response was received.',
  'To create a production build, use npm run build.',
  'July 4th is almost here.',
  'I like playing video games.',
  'I spent way too much on gacha games.',
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List items={list} />
      </header>
    </div>
  );
}

export default App;
