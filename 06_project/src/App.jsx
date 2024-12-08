import { useState } from 'react'
import { Input } from './components/'
import useCurrency from './hooks/useCurrencyInfo'
//import useCurrency from '06_project\src\hooks\useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
const useCurrencyInfo=useCurrency(from)
const options=Object.keys(useCurrencyInfo)
const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount) 
}
const convert= ()=>{
  setConvertedAmount(amount*useCurrencyInfo[to]) 
}
<div
className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
style={{
    backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
}}
>
<div className="w-full">
    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
            onSubmit={(e) => {
                e.preventDefault();
               
            }}
        >
            <div className="w-full mb-1">
                <Input
                    label="From"
                    
                />
            </div>
            <div className="relative w-full h-0.5">
                <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    
                >
                    swap
                </button>
            </div>
            <div className="w-full mt-1 mb-4">
                <Input
                    label="To"
                    
                />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert 
            </button>
        </form>
    </div>
</div>
</div>
}

export default App
