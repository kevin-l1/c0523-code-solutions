import React from 'react';
import './App.css';
import Accordion from './Accordion.js';

const topics = [
  {
    name: 'HyperText Markup Language',
    description:
      'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.',
  },
  {
    name: 'Cascading Style Sheets',
    description:
      'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    name: 'JavaScript',
    description:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Accordion topics={topics}/>
      </header>
    </div>
  );
}

export default App;
