import logo from './logo.svg';
import './App.css';
import React from 'react';
import Chart from './components/Chart/Chart';
import SpringAnimation from './components/SpringAnimation/SpringAnimation';

function App() {
  return (
    <div className="App">
      <SpringAnimation></SpringAnimation>
     <Chart></Chart>
    </div>
  );
}

export default App;
