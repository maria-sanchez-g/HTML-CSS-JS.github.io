import { useState } from 'react'

import Greeting from './Components/Greeting' //I need to add the functions from the folder Components, also in return
import BigCats from './Components/BigCats'
import './App.css'

function App() {
  return (
    <>
      <Greeting name="Edna"Greeting/>
      <Greeting name= "Maria"> Welcome to your first React app! </Greeting>
      <BigCats></BigCats>
    </>
  )
}

export default App


//name="Edna" is a normal prop (key/value pair).
//Welcome to your first React app! is the children.
//Using children makes your components more dynamic and reusable.

