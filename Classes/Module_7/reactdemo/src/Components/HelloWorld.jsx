function HelloWorld({ name }) {
  const person = {};
  const bool = true;

  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };
  return <h1 className={bool ? "classA" : "classB"}>Hello world {name}</h1>;
}

export default HelloWorld;
