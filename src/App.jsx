import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  // Add value to display
  const add = (value) => {
    setDisplay(display + value);
  };

  // Clear entire display
  const clearDisplay = () => {
    setDisplay('');
  };

  // Delete last character
  const deleteLast = () => {
    setDisplay(display.slice(0, -1));
  };

  // Calculate using Math.js API
  const calculate = () => {
    fetch(`https://api.mathjs.org/v4/?expr=${encodeURIComponent(display)}`)
      .then((res) => res.text())
      .then((result) => setDisplay(result))
      .catch(() => setDisplay('Error'));
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly id="display" />

      <div className="buttons">
        <button onClick={() => add('7')}>7</button>
        <button onClick={() => add('8')}>8</button>
        <button onClick={() => add('9')}>9</button>
        <button onClick={() => add('/')}>÷</button>

        <button onClick={() => add('4')}>4</button>
        <button onClick={() => add('5')}>5</button>
        <button onClick={() => add('6')}>6</button>
        <button onClick={() => add('*')}>×</button>

        <button onClick={() => add('1')}>1</button>
        <button onClick={() => add('2')}>2</button>
        <button onClick={() => add('3')}>3</button>
        <button onClick={() => add('-')}>−</button>

        <button onClick={() => add('0')}>0</button>
        <button onClick={() => add('(')}>(</button>
        <button onClick={() => add(')')}>)</button>
        <button onClick={() => add('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => add('+')}>+</button>

        <button onClick={() => add('sin(')}>sin</button>
        <button onClick={() => add('cos(')}>cos</button>
        <button onClick={() => add('tan(')}>tan</button>
        <button onClick={() => add('log(')}>log</button>

        <button onClick={() => add('sqrt(')}>√</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={deleteLast}>⌫</button>
      </div>
    </div>
  );
}