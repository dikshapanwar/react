import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);
  const addValue = () => {

    setCounter(prevCounter => Math.min(prevCounter + 1, 25));
  };
  const removeValue = () => {
   
    setCounter(prevCounter => Math.max(prevCounter - 1, 0));
  };

  return (
    <>
      <h1>Hello World</h1>
      <h1>Counter Value: {counter}</h1>
      
      <button onClick={addValue}>
        Add Value
      </button>
      
      <br />

      <button onClick={removeValue}>
        Remove Value
      </button>

      <p>{counter}</p>
    </>
  );
}

export default App;
