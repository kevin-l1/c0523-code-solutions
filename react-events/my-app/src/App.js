// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton.js'

function App() {

  function handleCustomClick(text) {
    alert(text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          color="red"
          text="Good Morning"
          onCustomClick={() => handleCustomClick('Clicked red Good Morning')}
        />
        <CustomButton
          color="orange"
          text="Bonjour"
          onCustomClick={() => handleCustomClick('Clicked orange Bonjour')}
        />
        <CustomButton
          color="yellow"
          text="Ohayo"
          onCustomClick={() => handleCustomClick('Clicked yellow Ohayo')}
        />
      </header>
    </div>
  );
}

export default App;
