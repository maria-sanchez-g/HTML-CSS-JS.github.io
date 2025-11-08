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

