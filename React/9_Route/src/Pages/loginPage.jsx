import loginForm from "../Components/loginForm";

export default function loginPage() {
  return (
    <div className="LoginPage componentBox">
      <h1>Login</h1>
      <LoginForm /> {/*calls your component that already handles the context */}
    </div>
  );
}
