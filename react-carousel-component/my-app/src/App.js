import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel.js';

const images = [
  { src: './images/bulbasaur.png', alt: 'Bulbasaur' },
  { src: './images/charmander.png', alt: 'Charmander' },
  { src: './images/cubone.png', alt: 'Cubone' },
  { src: './images/kirby.png', alt: 'Kirby' },
  { src: './images/braixen.png', alt: 'Braixen' },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
