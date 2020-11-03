import DisplayHistory from './components/DisplayHistory'
import Calculator from './components/Calculator'

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Enter Calculations
        </h1>
      </header>
      <main>
        <DisplayHistory />
        <Calculator />
      </main>
    </div>
  );
}

export default App;
