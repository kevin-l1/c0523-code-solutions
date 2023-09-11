import './Carousel.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLeft() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }

  const handleRight = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length]);

  function handleCircle(num) {
    setCurrentIndex(num);
  }

  useEffect(() => {
    let carousel = setInterval(handleRight, 1500);
    return () => clearInterval(carousel);
  }, [handleRight]);

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
