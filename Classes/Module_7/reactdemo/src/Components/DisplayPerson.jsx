export default function DisplayPerson({
  name,
  age,
  gender,
  height,
  customFunction,
}) {
  customFunction();

  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{gender}</div>
      <div>{height}</div>
    </>
  );
}
