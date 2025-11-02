import { useUser } from "../Context/UserContext"; // imports information from the custom hook from userContext. Things like the functions updateUser or logOutUser.
import { useState } from "react"; // I need useState because Temporary, inside one component

export default function LoginForm() {
const { currentUser, updateUser, logOutUser } = useUser();
//You can read this like:
// “Call useUser(), take the returned object, and extract three specific properties from it.”
// That is what object destructuring means.

const [email, setEmail] = useState("")
//useState is a React Hook that allows your component to store information that can change over time — called state.
// When you call useState(initialValue), React gives you two things:
// 1-The current value of that state variable.
// 2-A function that lets you update it.
// So the general pattern looks like:
// const [stateVariable, setStateVariable] = useState(initialValue);

//useState("")You are creating a state variable starting with an empty string as its initial value.
//mail is the variable that holds the current value of that state
//setEmail is the function that you call to update the value

function handleSubmit(event) { //function that runs when the form is submitted
  event.preventDefault();//stops the browsr's default behavior
  if (email.trim() !=="") { //checks that email is not empty. trim() is a string method in JavaScript that removes any spaces from both ends of the text.
    updateUser(email); //update user in context
    setEmail(""); //Clears the local input field (resets it to empty) after log
  }
}

if (currentUser) { //Checks if there is a logged-in user stored in your context.
    return (
      <div className="LoginForm">
        <button onClick={logOutUser}>Logout</button>
        {/* //Shows a button that, when clicked, calls the handleLogout function from context.
        That function sets currentUser back to null, meaning “logged out”. */}
      </div>
    );
  }

    return ( //This is what the component displays when no user is logged in.
       <form onSubmit={handleSubmit} className="LoginForm"> {/*The onSubmit event calls your handleSubmit function when the user clicks the Login button or presses enter */}
        <label htmlFor="email">Email:</label>
      <input //This is the email input field.
      id="email" //it matches the label
      type="email" //browser will validate it as a proper email format.
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email" //text hint shown inside the field.
      />
      <button type="submit">Login</button>
      </form>
    );
}