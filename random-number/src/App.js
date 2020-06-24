import React from 'react';
import './App.css';

import NumberDisplay from './components/NumberDisplay';
import NumberInputs from './components/NumberInputs'

function App() {
  return (
    <div className="App">
      <h1>Random Number App</h1>
      <div style={{display: "flex", flexDirection: "column", justify: "space-around"}}>
      <div style={{height: "20vh"}}>
      <NumberDisplay />
      </div>
      <NumberInputs />
      </div>
    </div>  
  );
}

export default App;
