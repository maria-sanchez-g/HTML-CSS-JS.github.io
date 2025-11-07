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