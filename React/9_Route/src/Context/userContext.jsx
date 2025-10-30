import { createContext, useState, useContext } from "react";

export const userContext = createContext(); //Create the Context object
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>

export function UserProvider ({children}) { //create the provider
    const [currentUser, setCurrentUser] = useState(null); // // Shared state: who is the current user (null = not logged in)

    function updateUser(email) { //function to log in
        setCurrentUser({email})
    }
    function logOutUser() { //function to log out
        setCurrentUser(null);
    }
return ( //return the provider. Pass the data and functions to all child components through value.
    <userContext.Provider value={{ currentUser, updateUser, logOutUser }}>
    {children}
    </userContext.Provider>
);
}

//helper hook for easy access
export function useUser() {
    return useContext(userContext);
}
















// TEMPLATE FOR A CONTEXT FILE
// import { createContext, useContext, useState } from "react";

// // 1️⃣ Create the Context object — this is the "shared box" for your data
// const MyContext = createContext();

// // 2️⃣ Create the Provider component
// export function MyProvider({ children }) {
//   // Define the shared state (can be anything: string, object, etc.)
//   const [value, setValue] = useState("default");

//   // Example of a function that updates the state
//   function updateValue(newValue) {
//     setValue(newValue);
//   }

//   // 3️⃣ Pass the data and functions to all child components through value
//   return (
//     <MyContext.Provider value={{ value, updateValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// }

// // 4️⃣ Create a custom hook for easier access to the context
// export function useMyContext() {
//   return useContext(MyContext);
// }