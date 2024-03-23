import { useState } from 'react'
import './App.css'

function App() {

  // First  param is the variable
  // Second param is the function
  let [counter, setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    //setCounter(counter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  const removeValue =() => {
    //setCounter(counter - 1)
    setCounter((prevCounter) => prevCounter - 1)
  }

  return (
    <>
      <h1>React Counter App {counter}</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add</button> {" "}
      <button onClick={removeValue} >Remove</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
