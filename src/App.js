import React, {useState, useEffect, useCallback, useMemo} from 'react';
import './App.css';

function square(number){
  return number * number;
};

function App() {
  const [counter, setCounter] = useState(1);
  const res = useMemo(() => {
    return square(counter);
  }, [counter]);

  const [name, setName] = useState('');


  const displayName = useCallback(
    () => {
      return name
    },
    [name],
  );

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <h2>Square of {counter} is {res}</h2>
      <button onClick={(e) => setCounter(counter + 1)}>Increment</button>
      <button onClick={(e) => setCounter(counter - 1)}>Decrement</button>
      
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />        
      </div>
      <div>
        <JustTyped displayName={displayName} />
      </div>
      
    </div>
  );
}


const JustTyped = ({displayName}) => {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    setValue(displayName());
    console.log("Calling useEffect...");
  }, [displayName]);

  return (
    <div>
      Just typed: {value}
    </div>
  )
};

export default App;
