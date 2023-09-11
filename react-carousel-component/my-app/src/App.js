import './App.css';
import Carousel from './Carousel.js';

const images = [
  { src: './images/bulbasaur.png', alt: 'Bulbasaur' },
  { src: './images/charmander.png', alt: 'Charmander' },
  { src: './images/squirtle.png', alt: 'Squirtle' },
  { src: './images/happiny.png', alt: 'Happiny' },
  { src: './images/tinkaton.png', alt: 'Tinkaton' },
];

function App() {
  return <Carousel images={images} />;
}

export default App;
