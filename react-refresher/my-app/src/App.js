import './App.css';
import { useState } from 'react';
import ClickButton from './Button.js';

function App() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <ClickButton text="Increase" click={increase} />
        {counter}
        <ClickButton text="Decrease" click={decrease} />
      </header>
    </div>
  );
}

export default App;
