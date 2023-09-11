import './RotatingBanner.css';
import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let newArray: string[];
  newArray = items.map((name) => name);

  function handlePrev() {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
  }

  function handleNext() {
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
  }

  function handleButtons() {
    setCurrentIndex(currentIndex);
  }

  const count: number = items.length;

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <div>
        <PrevButton clickPrev={handlePrev} />
        <Indicators
          count={count}
          current={currentIndex}
          onSelect={handleButtons}
        />
        <NextButton clickNext={handleNext} />
      </div>
    </div>
  );
}

function Banner(item: any) {
  return <div>{item}</div>;
}

function PrevButton(clickPrev: any) {
  return (
    <button className="previous" onClick={clickPrev}>
      Prev
    </button>
  );
}

function NextButton(clickNext: any) {
  return (
    <button className="next" onClick={clickNext}>
      Next
    </button>
  );
}

function Indicators(
  count: any,
  current: number,
  onSelect: Function
): JSX.Element {
  const buttons = [];

  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ background: i === current ? 'blue' : 'white' }}
        key={i}
        onClick={() => onSelect(i)}>
        {i}
      </button>
    );
  }

  return <div className="many-buttons">{buttons}</div>;
}
