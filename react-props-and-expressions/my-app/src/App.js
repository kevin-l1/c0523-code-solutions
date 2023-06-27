import './App.css';
import CustomButton from './CustomButton.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          className='buttonOne'
          text = 'I'
        />
        <CustomButton
        className='buttonTwo'
          text = 'know'
        />
        <CustomButton
          className='buttonThree'
          text = 'React!'
        />
      </header>
    </div>
  );
}

export default App;
