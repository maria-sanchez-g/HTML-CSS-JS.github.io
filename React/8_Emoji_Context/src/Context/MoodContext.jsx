import { createContext, useState, useContext } from "react";
// You are importing three React tools:
// createContext: You use this to create a Context object. The context will let you share data with deeply nested components without prop drilling.
// useState: You use this to create state inside a component. In this case, the current mood and the function that updates it.
// useContext: You use this later to read from the context.

export const MoodContext = createContext(); //create a context, shared container where you will store the data. createContext() returns an object with a .Provider component inside it.

export function MoodProvider ({children}) { //create the provider component
//instead of this:
//     export function MoodProvider(props) {
//   return <div>{props.children}</div>;
// }
// You can destructure the children property right in the function definition:
// export function MoodProvider({ children }) {
//   return <div>{children}</div>;
// }
// children is a special prop automatically provided by React that represents whatever is inside your component’s opening and closing tags.
// “Destructuring” means extracting that property from the props object directly in the function’s parameters.
// “From the props object, take the property called children and create a variable with that name.”
    const [mood, setMood] = useState("happy"); //You are creating state inside the provider. mood is the current value. setMood is the function you will call to change that value.

        function toggleMood () {
        if (mood == "happy") {
            setMood("sad")
        } else if (mood == "sad") {
            setMood("thirsty")
        } else if (mood == "thirsty") {
            setMood("cool")
        } else {
            setMood("happy")
        }
        }
    return ( //return the provider
    <MoodContext.Provider value={{ mood, toggleMood }}> 
      {children}
    </MoodContext.Provider>
    );
}
//A Provider must wrap its children and make the data available to other components through the context.
/* <MoodContext.Provider> is a special component that came from createContext().
It has a prop called value={...}.
Whatever you pass into value will be available to any component that uses this context.
Here you pass an object: { mood, toggleMood }.
That means any component inside this provider can read mood
And can call toggleMood()
{children} renders whatever was wrapped inside MoodProvider when you used it. */


// create the helper hook
export function useMood () {
    return useContext(MoodContext);
}

// A custom hook is simply a function whose name starts with use.
// It lets you reuse logic that involves other React hooks (like useContext, useState, or useEffect)


//Any component inside MoodProvider can access mood and toggleMood through the helper hook.

















