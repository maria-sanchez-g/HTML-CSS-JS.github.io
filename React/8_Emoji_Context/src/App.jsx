import Emoji from './Components/Emoji'
import './App.css'
import { MoodProvider } from './Context/MoodContext'
import BitcoinRates from './Components/BitcoinRates'

function App() {
  return (
    <>
<MoodProvider>
  <Emoji></Emoji>
  <BitcoinRates></BitcoinRates>
</MoodProvider>
    </>
  )
}

export default App

//MoodProvider is the function from MoodContext, all are functions

