import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded-md p-5'>
            <button onClick={()=>setColor("red")}  className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-md text-white' style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 rounded-md text-white' style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setColor("#133E87")} className='outline-none px-4 py-1 rounded-md text-white' style={{ backgroundColor: "#133E87" }}>Dark Blue</button>
            <button onClick={()=>setColor("#9B7EBD")} className='outline-none px-4 py-1 rounded-md text-white' style={{ backgroundColor: "#9B7EBD" }}>Lavender</button>
            <button onClick={()=>setColor("#FFF100")} className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "#FFF100" }}>Yellow</button>
            <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "orange" }}>Orange</button>
            <button onClick={()=>setColor("#758694")} className='outline-none px-4 py-1 rounded-md text-white ' style={{ backgroundColor: "#758694" }}>Gray Blue</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
