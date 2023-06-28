// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js'

function App() {

  function handleCustomClick(text) {
    alert$(`Clicked ${text}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          color="red"
          text="Good Morning"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          color="orange"
          text="Bonjour"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          color="yellow"
          text="Ohayo"
          onCustomClick={handleCustomClick}
        />
      </header>
    </div>
  );
}

export default App;
