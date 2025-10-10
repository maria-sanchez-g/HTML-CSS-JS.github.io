import { useState } from 'react'

import Greeting from './Components/Greeting' //I need to add the functions from the folder Components, also in return
import './App.css'

function App() {
  return (
    <>
      <Greeting name="Edna"Greeting/>
      <Greeting name= "Maria"> Welcome to your first React app! </Greeting>
    </>
  )
}

export default App


//name="Edna" is a normal prop (key/value pair).
//Welcome to your first React app! is the children.
//Using children makes your components more dynamic and reusable.