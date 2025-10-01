import { useState } from 'react'
// import Clock from "./Components/Clock";
import ClockDisplay from './Components/ClockDisplay';
import ActivityFinder from './Components/ActivityFinder';
import RefCounter from './Components/RefCounter';
import VideoPlayer from './Components/VideoPlayer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return(
    <>
  <ClockDisplay/>
  <ActivityFinder></ActivityFinder>
  <RefCounter></RefCounter>
  <VideoPlayer></VideoPlayer>
    </>
  )
}

export default App
