import React from 'react';

import './App.css';

import PersonalCard from './components/MyNewComponent';
function App() {
  return (
    <div className="App">
      <PersonalCard lastName ={"Doe"} firstName="Jane" age={46} hair={"Blonde"}/>
      <PersonalCard lastName ={"Smith"} firstName="John" age={88} hair={"Brown"}/>
      <PersonalCard lastName ={"Fillmore"} firstName="Millard" age={50} hair={"Blonde"}/>
      <PersonalCard lastName ={"Smith"} firstName="Maria" age={62} hair={"Blonde"}/>
    </div>
  );
}

export default App;
