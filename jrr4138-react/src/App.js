import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Clubs from './Clubs'

function App() {
  return (
    <div className="App">
      <h1>Nightclub Capacity</h1>
      <h3>Each time someone enters/ leaves, select the club and click the appropriate button</h3>
      <Clubs/>
    </div>
  );
}

export default App;
