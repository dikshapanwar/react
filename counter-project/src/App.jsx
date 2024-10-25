import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(10);

  const addValue = () => {
    // Use Math.min to cap the counter at 25
    setCounter(prevCounter => Math.min(prevCounter + 1, 25));
  };

  const removeValue = () => {
    // Use Math.max to ensure the counter doesn’t go below 0
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
