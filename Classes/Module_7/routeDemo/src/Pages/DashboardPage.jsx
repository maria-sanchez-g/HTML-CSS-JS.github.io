import { useNavigate, Outlet } from "react-router-dom";
export default function DashboardPage() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();
  return (
    <>
      <div className="DashboardPage componentBox">
        <h1>Dashboard</h1>
        <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
        <button onClick={() => navigate("/dash/messages")}>
          Show Messages
        </button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <Outlet />
    </>
  );
}
