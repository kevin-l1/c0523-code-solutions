import './RotatingBanner.css';
import Buttons from './Buttons';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
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
