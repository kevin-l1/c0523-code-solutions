import { useState } from 'react';

export default function List({ items }: Props) {
  const [inputValue, setInputValue] = useState('');

  let newArray = items.map((text) =>
    text.includes(inputValue) ? <li>{text}</li> : null
  );

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  let nulls = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === null) {
      nulls++;
    }
  }

  return (
    <form>
      <div className="inputContainer">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="inputImage"
          name="search"
          onChange={handleChange}
        />
      </div>
      <ul>{newArray}</ul>
      {nulls === newArray.length ? <p>No items match the filter.</p> : null}
    </form>
  );
}
