import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  // <Routes>
  //   <Route path="/">

  //   </Route>
  // </Routes>
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer">
//       Learn React
//     </a>
//   </header>
// </div>;
