import { useMood } from "../Context/MoodContext";
//You import the helper hook you created earlier. This hook gives you direct access to the mood value and the toggleMood function that were provided by the MoodProvider.

    function Emoji () {
        const  { mood, toggleMood } = useMood(); // Use the custom hook to access the shared state and function

    //It extracts (destructures) the two values that the Provider shared:
    //mood → the current mood state.
    //toggleMood → the function to change the mood.

        return (
        <div className="MoodChanger componentBox">
            <h3>Emoji</h3>
            Current Mood: {mood}
            <button onClick={toggleMood}>Change Mood</button>
        </div>
        )
    }
    
    export default Emoji;

    //Emoji should no longer manage its own mood. Emoji should only read and update mood through context