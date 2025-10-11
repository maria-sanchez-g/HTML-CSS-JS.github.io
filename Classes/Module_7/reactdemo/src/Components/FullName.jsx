function NamePart(props) {
  return (
    // reusable component to display part of a name from the value prop
    <span className="NamePart">{props.value}</span>
  );
}

export default function FullName(props) {
  return (
    // composes the NamePart component to display a full name
    <div className="FullName ">
      Full name: <NamePart value={props.first} />{" "}
      <NamePart value={props.last} />
    </div>
  );
}
