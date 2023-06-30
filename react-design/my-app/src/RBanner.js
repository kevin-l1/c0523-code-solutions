import './RotatingBanner.css';
import React, { useState } from 'react';

export default function RBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // let newArray = items.map((name) => name);

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleNext() {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handleButtons(num) {
    setCurrentIndex(num);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <div>
        <PrevButton clickPrev={handlePrev} />
        <Indicators
          count={items.length}
          current={currentIndex}
          onSelect={handleButtons}
        />
        <NextButton clickNext={handleNext} />
      </div>
    </div>
  );
}

function Banner({ item }) {
  return <div style={{ fontSize: 100, marginBottom: 25 }}>{item}</div>;
}

function PrevButton({ clickPrev }) {
  return (
    <button className="previous" onClick={clickPrev}>
      Prev
    </button>
  );
}

function NextButton({ clickNext }) {
  return (
    <button className="next" onClick={clickNext}>
      Next
    </button>
  );
}

function Indicators({ count, current, onSelect }) {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ background: i === current ? 'lightblue' : 'white' }}
        key={i}
        onClick={() => onSelect(i)}>
        {i}
      </button>
    );
    if (i === current) {
    }
  }

  return <div className="many-buttons">{buttons}</div>;
}
