// src/Context/cartContext.jsx
import { createContext, useContext, useEffect, useReducer, useMemo } from "react";
import api from "../api/axios";

// Defines what the state looks like at the start. These initial values tell React what type of data to expect and prevent errors before the data is ready.
const initialState = { loading: false, error: null, items: [] };

const Types = {
  INIT_START: "INIT_START",
  INIT_SUCCESS: "INIT_SUCCESS",
  INIT_ERROR: "INIT_ERROR",
  ADD_ONE: "ADD_ONE",
  REMOVE_ONE: "REMOVE_ONE",
  REMOVE_ALL: "REMOVE_ALL",
  RESET: "RESET",
};

//reducer function
function cartReducer(state, action) {
  switch (action.type) {
    case Types.INIT_START:
      return { ...state, loading: true, error: null };

    case Types.INIT_SUCCESS:
      return { loading: false, error: null, items: action.payload };

    case Types.INIT_ERROR:
      return { loading: false, error: action.payload, items: [] };

    case Types.ADD_ONE: {
      const pid = Number(action.productId); //We take the productId sent in the action and convert it into a Number (just in case it came as a string
      const idx = state.items.findIndex(r => r.productId === pid); //We search inside the cart (state.items) to see if this product is already in the cart.If the product is found, idx will be its index (0,1,2, etc.). If the product is not found, idx will be -1
      if (idx === -1) { //If the product is not in the cart yet:
        return { ...state, items: [...state.items, { productId: pid, qty: 1 }] }; //We return a new state object:
        // We return a new state object:
        // Keep everything in the previous state (...state)
        // Create a new array of items ([...state.items])
        // Add one new line to the cart: { productId: pid, qty: 1 }
        // So this adds the product for the first time.
      } else { //Otherwise (the product already exists in the cart):
        const next = [...state.items]; //We make a copy of the items array (we do not modify state directly).
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 }; //We update the quantity: Copy the existing item and increased by 1
        return { ...state, items: next }; //We return a new state that contains the updated items array.
      }
    }

    case Types.REMOVE_ONE: {
      const pid = Number(action.productId);
      const idx = state.items.findIndex(r => r.productId === pid); //state.items This is the current list of products in the cart. This method searches the array and returns the index (position) of the first element that matches the condition. r represents one cart item like
      if (idx === -1) return state; //idx is the position of the product in the cart.
      const next = [...state.items]; //We create a copy of the array state.items.
      const newQty = next[idx].qty - 1; //We take the current quantity of the product at position idx and subtract one.
      if (newQty <= 0) { //If after subtracting one unit the quantity becomes zero or less, that means there are no units left of this product.
        next.splice(idx, 1); //splice removes the item at index idx.
      } else {
        next[idx] = { ...next[idx], qty: newQty }; //We spread the existing object (...next[idx]), copies all the original fields. qty: newQty overwrites the qty field with the new value we calculated.
      }
      return { ...state, items: next };
    }

    case Types.REMOVE_ALL: {
      const pid = Number(action.productId);
      return { ...state, items: state.items.filter(r => r.productId !== pid) }; //state.items is the current cart items array. r.productId !== pid Keep this cart item only if its productId is not equal to pid. pid is productId

    }

    case Types.RESET:
      return { ...state, items: [] };

    default:
      return state;
  }
}

//Creates the context object. Initial value null helps catch missing providers.
const CartContext = createContext(null);

//Provider component that holds the reducer and exposes actions and selectors to descendants.
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const cart = state.items;

async function addOne(productId) {
    await api.post(`/cart/${productId}`);
    dispatch({ type: Types.ADD_ONE, productId });
  }

  async function removeOne(productId) {
    await api.delete(`/cart/${productId}`);
    dispatch({ type: Types.REMOVE_ONE, productId });
  }

  async function removeAll(productId) {
    await api.post("/cart/remove-all", { productId });
    dispatch({ type: Types.REMOVE_ALL, productId });
  }

  async function reset() {
    await api.delete("/cart"); // matches router.delete("/", controller.clear) from the backend cartRoutes
    dispatch({ type: Types.RESET });
  }

//SELECTORS. These functions do not change state.

  // Returns quantity for one product
const countPerProduct = (productId) =>
  cart.find(item => item.productId === Number(productId))?.qty ?? 0;


// cart.find(...) searches the cart for a line with the matching productId.
// ?.qty means “if the line exists, get its qty”.
// ?? 0 means “if qty is undefined or the item does not exist, return 0”.

  // Joins cart lines with product data array
  const groupedLines = (products) =>
    cart.map(line => { //loops through each cart row.
      const product = products.find(p => p.id === Number(line.productId));
      if (!product) return line;
      return {
        ...product,
        qty: line.qty,
        lineTotal: product.price * line.qty,
      };
    });

  // Derived total quantity
  const totalQty = useMemo(
    () => cart.reduce((s, l) => s + l.qty, 0),
    [cart]
    );

  // Calculates total price
  const totalPrice = (products = []) => {
      const priceById = new Map(products.map(p => [Number(p.id), Number(p.price) || 0]));
      return cart.reduce(
      (sum, line) => sum + (priceById.get(Number(line.productId)) || 0) * line.qty,
      0
        );
    };

  // Memoize values for performance
  const value = useMemo( //useMemo prevents unnecessary re-rendering.
    () => ({
      cart,
      totalQty,
      addOne,
      removeOne,
      removeAll,
      reset,
      countPerProduct,
      groupedLines,
      totalPrice,
    }),
    [cart, totalQty]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
