import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Cart from "../Pages/Cart.jsx";
import About from "../Pages/About.jsx";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

