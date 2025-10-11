import { useState } from "react";
export default function LoginForm() {
  const [form, setForm] = useState({ email: "kinglsy@gmail.com" });
  const formSubmit = (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.target);
      const formData = Object.fromEntries(data);
      console.log(formData, aValue);
      throw new Error("this is an error");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className="LoginForm componentBox" onSubmit={formSubmit}>
      <div className="formRow">
        <label>
          Email Address:
          <input type="email" defaultValue={form.email} name="email" />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input type="password" defaultValue={form.password} name="password" />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
