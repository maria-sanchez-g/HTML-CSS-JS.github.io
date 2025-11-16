import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";
import { UserProvider } from "./Context/UserContext";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import './App.css'

function App() {
  
  return (
    <>
    <UserProvider>
    <ProductProvider>
      <CartProvider>
        <Navbar />
        <AppRoutes />
      </CartProvider>
    </ProductProvider>
    </UserProvider>
    </>
  )
}

export default App

// Your contexts — UserProvider, ProductProvider, and CartProvider — act like invisible storage layers.
// They allow you to share information across all pages without passing props manually.

// Provider	Purpose
// UserProvider	Keeps track of who is logged in (user details, tokens).
// ProductProvider	Loads and provides product data to any page or component.
// CartProvider	Manages cart items, total quantity, and prices.