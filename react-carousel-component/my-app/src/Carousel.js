import './Carousel.css';
import { useState } from 'react';
// import { FaCircle } from 'react-icons/fa';
// import { FaRegCircle } from 'react-icons/fa';
// import { FaArrowLeft } from 'react-icons/fa';
// import { FaArrowRight } from 'react-icons/fa';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <i class="fa-solid fa-chevron-left" onClick={handleLeft}></i>
      <Pictures images={images} onClick={handleCircle} />
      <i class="fa-solid fa-chevron-right" onClick={handleRight}></i>
    </div>
  );
}

function Pictures({ images, onClick }) {
  const pictures = [];
  const circles = [];
  for (let i = 0; i < images.length; i++) {
    pictures.push(<img src={images[i].src} alt={images[i].alt}></img>);
    circles.push(
      <i class="fa-regular fa-circle" onClick={() => onClick(i)}></i>
    );
  }
  return (
    <div className="picture-circles-container">
      <div className="pictures-container">{pictures}</div>
      <div className="circles-container">{circles}</div>
    </div>
  );
}
