import { useNavigate, Outlet } from "react-router-dom";
import SubscribeForm from "../Components/SubcribeForm";

export default function Homepage() {
  // Save in pages/Homepage.jsx
  const navigate = useNavigate();
  return (
    <div className="Homepage">
      <h1>Home</h1>
      <SubscribeForm></SubscribeForm>
      <button onClick={() => navigate("/dash")}>dashboard</button>
    </div>
  );
}
