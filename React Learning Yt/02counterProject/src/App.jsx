import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = ()=> {
    if(count < 20) setCount(count+1)
  }

  const removeCount = ()=>{
    if(count > 0) setCount(count-1)
  }

  return (
    <>
      <h1>Current counter is : {count}</h1>
      <button
       onClick={addCount} >
        Add Counter
      </button>

      <button
       onClick={removeCount} >
        Remove Counter
      </button>

    </>
  )
}

export default App
