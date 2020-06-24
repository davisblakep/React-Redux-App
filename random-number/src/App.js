import React from 'react';
import './App.css';

import NumberDisplay from './components/NumberDisplay';
import NumberInputs from './components/NumberInputs'

function App() {
  return (
    <div className="App">
      <h1>Random Number App</h1>
      <NumberDisplay />
      <NumberInputs />
    </div>  
  );
}

export default App;
