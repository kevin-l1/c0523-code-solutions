import './Buttons.css';

export default function Buttons() {
  return (
    <div className="many-buttons">
      <button className="previous">Prev</button>
      <div>
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
      <button className="next">Next</button>
    </div>
  );
}
