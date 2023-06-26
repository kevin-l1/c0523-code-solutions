import './ToggleButton.css';
import { useState } from 'react';

export default function ToggleButton() {
  const [onoff, setOnoff] = useState(true);

  function handleClick() {
    setOnoff(!onoff);
  }

  let switchStatus = '';

  onoff
    ? (switchStatus = 'toggle-button on')
    : (switchStatus = 'toggle-button off');

  return (
    <>
      <button className={switchStatus} onClick={handleClick}>
        <button className="circle"></button>
      </button>
      <h1>{onoff ? 'On' : 'Off'}</h1>
    </>
  );
}
