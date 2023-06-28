import './RotatingBanner.css';
import Buttons from './Buttons';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const newArray = items.map((name) => <h1>{name}</h1>);

  return (
    <div className="container">
      <div className="names">{newArray[0]}</div>
      <Buttons />
    </div>
  );
}
