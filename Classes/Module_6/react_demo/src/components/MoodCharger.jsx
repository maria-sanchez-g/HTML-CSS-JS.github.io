import { useState, useEffect } from "react";
// save in MoodChanger.jsx
function MoodChanger() {
  const [mood, setMood] = useState("happy");
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="MoodChanger componentBox">
        Current Mood: {mood} {count}
      </div>
      <button
        onClick={() => {
          setMood("tired");
          setCount(count + 1);
        }}
      >
        Stay Up Late
      </button>
      <button
        onClick={() => {
          setMood("hungry");
          setCount(count + 1);
        }}
      >
        Skip Lunch
      </button>
      <button
        onClick={() => {
          setMood("Cool");
          setCount(count + 1);
        }}
      >
        Learn more react
      </button>
    </>
  );
}
export default MoodChanger;