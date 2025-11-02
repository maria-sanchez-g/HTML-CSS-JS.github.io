export default function LoginPage() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Login</h1>
      {/* Renders the form component */}
      {/* If you prefer to keep the form inline, you can,
          but this keeps the page clean. */}
      {/* @ts-ignore */}
      {/* eslint-disable-next-line */}
      <LoginForm />
    </div>
  );
}

import LoginForm from "../components/LoginForm"; // import at bottom or top, either is fine
