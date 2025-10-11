import FruitItem from "./FruitItem";

export default function FruitList({ fruitList }) {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <FruitItem key={fruit.id} fruit={fruit.name}></FruitItem>
      ))}
    </ul>
  );
}