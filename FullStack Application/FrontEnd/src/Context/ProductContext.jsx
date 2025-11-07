import { createContext, useContext, useState, useReducer, useEffect } from "react";
import api from "../api/axios";


// Defines what the state looks like at the start. These initial values tell React what type of data to expect and prevent errors before the data is ready.
const initialState = { loading: false, error: null, items: [] };

//Types is an object. Each property inside the object represents a type of action in a reducer or state management flow.
const Types = { 
  INIT_START: "INIT_START", //Used when an initialization process begins (for example, fetching data).
  INIT_SUCCESS: "INIT_SUCCESS", //Used when the initialization completes successfully (for example, when the API data arrives).
  INIT_ERROR: "INIT_ERROR" //Used when something fails during that process (for example, if the API returns an error).
};

//reducer function
function reducer (state, action) {
  switch (action.type) { //action.type tells the reducer what kind of update to perform.
    case Types.INIT_START:
      return { ...state, loading: true, error: null };
    case Types.INIT_SUCCESS:
      return { loading: false, error: null, items: action.payload };
    case Types.INIT_ERROR:
      return { loading: false, error: action.payload, items: [] }; //action.payload contains the error message or data that was sent with the action.items: []
                                                                    //The list of items is reset to an empty array, because if there was an error, you cannot show any data.
    default: //Always return the current state if nothing matches.
      return state;
  }
}

//create context
const ProductContext = createContext(null); //ProductContext becomes that container.

//After defining the context, you usually create a provider.
export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => { //This sets up a side effect that runs when the component mounts. The empty dependency array at the end means it runs only once.
    let isActive = true;
    
    async function load() {
      dispatch({ type: Types.INIT_START }); //Sends an action to the reducer telling it that loading has begun. Usually this sets loading: true and removes any previous error
      try {
        const res = await api.get("/products"); // GET http://localhost:3000/api/products
        if (isActive) dispatch({ type: Types.INIT_SUCCESS, payload: res.data.items || [] });
      } catch (err) {
        if (isActive) dispatch({ type: Types.INIT_ERROR, payload: err.message || "Failed to load products" });
      }
    }
    load(); //Runs the asynchronous function immediately after defining it.

    return () => { isActive = false; }; // This is the cleanup function.
  }, []);

  // Selector helpersThis defines a helper function that searches in state.items for a product whose id matches the given id.
//If found, it returns the product. Otherwise, it returns null
  const getById = (id) => state.items.find(p => p.id === Number(id)) || null;

  return (
    <ProductContext.Provider value={{ ...state, getById }}> 
      {children}
    </ProductContext.Provider>
  );
}
  //...state, getById , spread operator, spreads the entire state (loading, error, items) and also adds the getById helper.

  //helperhook for easy access
export function useProducts() {
  const ctx = useContext(ProductContext); //this is the step where your component (or your custom hook) accesses the shared values stored in the ProductContext.
  return ctx;
}