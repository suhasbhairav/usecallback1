import React, {useState, useEffect, useCallback} from 'react';
import './App.css';

function square(number){

  return number * number;
};

function App() {
  const [counter, setCounter] = useState(1);
  const res = square(counter);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <h2>Square of {counter} is {res}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
      <button onClick={(e) => setCounter(counter - 1)}>Decrement</button>
      
      
    </div>
  );
}

export default App;
