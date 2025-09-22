import FruitItem from "./FruitItem"

export default function FruitList({fruitList}) {
    return (
        <ul>
            {fruitList.map((fruit) => (
                <FruitItem fruit={fruit.name}></FruitItem>
            ))}
        </ul>
    )
}