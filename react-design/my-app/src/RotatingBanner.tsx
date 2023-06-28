import './RotatingBanner.css';
import Buttons from './Buttons';

// type items = [
//   string
// ]

export default function RotatingBanner({ items }: string[]) {
  return (
    <div className="container">
      <div className="names">
        {items.map((name) => (
          <h1>{name}</h1>
        ))}
      </div>
      <Buttons />
    </div>
  );
}
