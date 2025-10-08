import { useNavigate, Outlet } from "react-router-dom";
import SubscribeForm from "../Components/SubcribeForm";

export default function Login() {
  // Save in pages/Homepage.jsx
  const navigate = useNavigate();
  return (
    <div className="Homepage">
      <SubscribeForm></SubscribeForm>
    </div>
  );
}