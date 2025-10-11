export default function City({
  name,
  state = "NSW",
  country = "Australia",
  children,
}) {
  return (
    <>
      {children}
      <div className="City">
        <strong>{name}</strong> is in {state}, {country}
      </div>
    </>
  );
}
