import './Carousel.css';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let carousel = setInterval(handleRight, 1500);
    return () => clearInterval(carousel);
  });

  function handleLeft() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  function handleRight() {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }

  function handleCircle(num) {
    setCurrentIndex(num);
  }

  return (
    <div className="container">
      <i className="fa-solid fa-chevron-left" onClick={handleLeft}></i>
      <div className="image-circle-container">
        <Banner image={images[currentIndex]} />
        <Circles
          count={images.length}
          onClick={handleCircle}
          index={currentIndex}
        />
      </div>
      <i className="fa-solid fa-chevron-right" onClick={handleRight}></i>
    </div>
  );
}

function Banner({ image }) {
  return (
    <div className="pictures-container">
      <img src={image.src} alt={image.alt}></img>
    </div>
  );
}

function Circles({ count, onClick, index }) {
  const circles = [];
  for (let i = 0; i < count; i++) {
    circles.push(
      <i
        className={index === i ? 'fa-solid fa-circle' : 'fa-regular fa-circle'}
        onClick={() => onClick(i)}></i>
    );
  }
  return <div className="circles-container">{circles}</div>;
}
