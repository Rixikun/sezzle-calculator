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
      <Calculator />
      <DisplayHistory />
    </div>
  );
}

export default App;
