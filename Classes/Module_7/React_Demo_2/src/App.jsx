import { useState } from 'react'
import Clock from "./Components/Clock";
import ClockDisplay from './Components/ClockDisplay';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return(<Clock/>)
}

export default App
