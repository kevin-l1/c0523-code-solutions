import './RotatingBanner.css';
import Buttons from './Buttons';
import Prev from './Prev';
import Next from './Next';
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

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <div>
        <PrevButton clickPrev={handlePrev} />
        <Indicators
          count={items.length}
          index={currentIndex}
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
      Prev
    </button>
  );
}

function Indicators(count: number, index: number, onSelect: Function) {
  return (
    <div className="many-buttons">
      <button>0</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  );
}
