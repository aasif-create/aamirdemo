import React from 'react';
import Calculator from './components/Calculator';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Scientific Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;