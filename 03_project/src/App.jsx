import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-lime-400"> Hello world! </h1>
     <Card userName="Diksha Panwar" btnText="Click me"/>
     <Card userName="Manisha Gupta" btnText="visit Profile"/>
    </>
  )
}

export default App
