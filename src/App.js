import DisplayHistory from './components/DisplayHistory'
import Calculator from './components/Calculator'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Enter Calculations
        </h1>
      <br/>
      <Calculator />
      <DisplayHistory />
    </div>
  );
}

export default App;
