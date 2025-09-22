import { use, useState } from "react";
import "./App.css";
import FruitList from "./components/FruitList";
function App() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grapes", color: "Purple" },
    { id: 5, name: "Mango", color: "Green/Yellow" },
  ]);
  return (
    <>
      <FruitList fruitList={fruits}></FruitList>
    </>
  );
}
export default App;