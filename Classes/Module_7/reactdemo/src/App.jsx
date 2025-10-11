import { use, useState } from "react";
import "./App.css";
import BirthdayTranslator from "./Components/BirthdayTranslator";
import FruitList from "./Components/FruitList";
import LoginForm from "./Components/LoginForm";
import ExplodingBomb from "./Components/ExplodingBomb";
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
      <LoginForm></LoginForm>
      <ExplodingBomb></ExplodingBomb>
    </>
  );
}
export default App;
