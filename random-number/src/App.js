import React from 'react';
import './App.css';

import NumberDisplay from './components/NumberDisplay';
import NumberInputs from './components/NumberInputs';
import NavAppBar from './components/NavAppBar'

function App() {
  return (
    <div className="background-image">
      <NavAppBar />
      <div className="App">
      <h1>Random Number App</h1>
      <div style={{display: "flex", flexDirection: "column", justify: "space-around", height: "20vh"}}>
      <div>
      <NumberDisplay />
      </div>
      <NumberInputs />
      </div>
      </div>
    </div>  
  );
}

export default App;
