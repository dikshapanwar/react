import { useState } from 'react'
function App() {
  let [counter,setCounter] =useState(10);

  //let counter = 10;
  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    if (counter >25) {
      setCounter(25);
    }
  
   // console.log(counter);
  }
  const removeValue = () => {
    counter = counter - 1
    setCounter(counter);
    if (counter < 0) {
      setCounter(0);
    }
   // console.log(counter);
  }
  return (
    <>
      <h1>hello World</h1>
      <h1>Counter Value:{counter}</h1>
      <button
        onClick={addValue}
      >Add Value
        {counter}
      </button>
      <br />
      <button
        onClick={removeValue}>Remove Value{counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
