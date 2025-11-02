"use client";                           // ⬅️ Required (uses hooks)
import { useState } from "react";
import { useUser } from "../../context/userContext"; // ⬅️ update the path

export default function LoginForm() {
  const { currentUser, updateUser, logOutUser } = useUser();

  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() !== "") {
      updateUser(email);
      setEmail("");
    }
  }

  if (currentUser) {
    return (
      <div className="LoginForm">
        <button onClick={logOutUser}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}
