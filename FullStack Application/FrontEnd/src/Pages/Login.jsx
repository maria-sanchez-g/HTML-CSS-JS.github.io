import LoginForm from "../Components/LoginForm";

export default function Login() {
  return (
    <div className="LoginPage componentBox">
      <h1>Login</h1>
      <LoginForm /> {/*calls your component that already handles the context */}
    </div>
  );
}
