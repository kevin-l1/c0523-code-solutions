import './HotButton.css';
import { useState } from 'react';

export default function HotButton() {
  const [counter, setCounter] = useState(0);

  let color;
  let textColor;

  function handleClick() {
    setCounter(counter + 1);
  }

  if (counter >= 0 && counter < 3) {
    color = 'black';
    textColor = 'white';
  } else if (counter >= 3 && counter < 6) {
    color = '#351C75';
    textColor = 'white';
  } else if (counter >= 6 && counter < 9) {
    color = '#674EA7';
    textColor = 'white';
  } else if (counter >= 9 && counter < 12) {
    color = '#E06666';
    textColor = 'white';
  } else if (counter >= 12 && counter < 15) {
    color = '#F6B26B';
  } else if (counter >= 15 && counter < 18) {
    color = '#FFFF00';
  } else {
    color = '#FFFFFF';
  }

  return (
    <>
      <button
        style={{ background: color, color: textColor }}
        className="button"
        onClick={handleClick}>
        Hot Button
      </button>
      <h1>Clicks: {counter}</h1>
    </>
  );
}
