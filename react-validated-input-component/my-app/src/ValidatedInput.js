import { useState } from 'react';
import './ValidatedInput.css';
export default function ValidatedInput() {
  let [count, setCount] = useState(0);

  function typeCount(event) {
    setCount((count = event.target.value.length));
  }

  return (
    <label>
      Password
      <div className="input-container">
        <input type="password" onChange={typeCount}></input>
        <i
          className={
            count >= 8 ? 'fa-solid fa-check' : 'fa-solid fa-xmark'
          }></i>
      </div>
    </label>
  );
}
