import { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const addToInput = (value) => {
    setInputValue((prevValue) => prevValue + value);
  };

  return (
    <div className="app">
      <div className="app_calculator">
        <div className="input-view">
          <input
            className="input-field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <div className="button-container">
          <div className="grid-container">
            <div className="grid-item" onClick={() => addToInput('1')}>1</div>
            <div className="grid-item" onClick={() => addToInput('2')}>2</div>
            <div className="grid-item" onClick={() => addToInput('3')}>3</div>
            <div className="grid-item" onClick={() => addToInput('+')}>+</div>
            <div className="grid-item" onClick={() => addToInput('4')}>4</div>
            <div className="grid-item" onClick={() => addToInput('5')}>5</div>
            <div className="grid-item" onClick={() => addToInput('6')}>6</div>
            <div className="grid-item" onClick={() => addToInput('-')}>-</div>
            <div className="grid-item" onClick={() => addToInput('7')}>7</div>
            <div className="grid-item" onClick={() => addToInput('8')}>8</div>
            <div className="grid-item" onClick={() => addToInput('9')}>9</div>
            <div className="grid-item" onClick={() => addToInput('*')}>*</div>
            <div className="grid-item" onClick={() => addToInput('0')}>0</div>
            <div className="grid-item" onClick={() => addToInput('%')}>%</div>
            <div className="grid-item" onClick={() => addToInput('.')}>.</div>
            <div className="grid-item" onClick={() => addToInput('=')}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
