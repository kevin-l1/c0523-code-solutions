import './Button.css';

export default function ClickButton({ text, click }) {
  return (
    <button className="button" onClick={click}>
      {text}
    </button>
  );
}
