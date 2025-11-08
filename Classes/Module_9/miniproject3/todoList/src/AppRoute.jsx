import { Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
export default function AppRoute(props) {
  return (
    <Routes>
      <Route index element={<Index></Index>} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}