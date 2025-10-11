import React from "react";

function Bomb() {
  throw new Error(" KABOOM ");
}

export default function ExplodingBomb() {
  const [exploded, setExploded] = React.useState(false);

  return (
    <div className="ExplodingBomb componentBox">
      <button onClick={() => setExploded(!exploded)}>
        DANGER: Click to explode bomb!
      </button>

      {exploded ? <Bomb /> : null}
    </div>
  );
}
