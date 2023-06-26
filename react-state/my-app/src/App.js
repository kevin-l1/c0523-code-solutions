import './App.css';
import ToggleButton from './ToggleButton.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton color='red' text='This is a button'/>
        <ToggleButton color='orange' text='This is also button'/>
        <ToggleButton color='green' text='This too, is a button'/>
      </header>
    </div>
  );
}

export default App;
