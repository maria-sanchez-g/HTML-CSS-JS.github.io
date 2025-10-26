import { useState } from "react";

function Emoji () {
    const [mood, setMood] = useState("happy");

    function toggleMood() {
        if (mood === "happy") {
            setMood("sad")
        } else {
            setMood("happy");
        }
    }

    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}
            <button on onClick={toggleMood}>Change Mood</button>
        </div>
    );
}


export default Emoji;

// const [mood, setMood] = useState("happy"); You create a state variable called mood and set its initial value to the happy emoji

// mood → stores the current emoji. setMood() → changes it.

// function toogleMood checks the current mood:
// If it is happy, it changes it to sad. Otherwise, it changes back to happy.
// So each time you click, it toggles between both emojis.

//When you click this button, React runs the toggleMood() function, updates the state, and re-renders the new emoji.