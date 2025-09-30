import { useState } from "react";
import "./App.css";
import FruitList from "./components/FruitList";
import BirthdayTranslator from "./components/BirthdayTranslator";
import Weather from "./components/Weather";
import CheckWeather from "./components/CheckWeather";
import Temperature from "./components/Temperature";
import LoginForm from "./components/LoginForm";

function App() {
  const [fruits, setFruits] = useState([
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Orange", color: "Orange" },
    { id: 4, name: "Grapes", color: "Purple" },
    { id: 5, name: "Mango", color: "Green/Yellow" },
  ]);

  const reverseFruitList = () => {
    const copiedFruit = [...fruits];
    copiedFruit.reverse();
  };

  return (
    <>
      <FruitList fruitList={fruits}></FruitList>
      <button onClick={reverseFruitList}>Reverse</button>
      <BirthdayTranslator></BirthdayTranslator>
      <Weather></Weather>
      <Temperature></Temperature>
      <CheckWeather></CheckWeather>
      <LoginForm></LoginForm>
    </>
  );
}
export default App;