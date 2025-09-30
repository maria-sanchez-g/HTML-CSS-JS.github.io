import { useState } from "react";
export default function LoginForm() {
  // input state values always need to be strings - empty initially
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
    const [form, setForms] = useState({});
  const formSubmit = (event) => {
    event.preventDefault();
    console.log(event.target)
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);
    // const formData = { userEmail, userPassword };
    console.log(formData);
  };
  return (
    <form className="LoginForm componentBox" onSubmit={formSubmit}>
      <div className="formRow">
        <label>
            Email Address:
          {/* Controlled form element needs both value and onChange. onChange handler uses event param e to access target value.
           Whenever user types, new value is stored in state. */}
           <input type="email" defaultValue={form.email} name="email"/>
          {/* <input type="email" value={userEmail} name="userEmail"/> */}
            {/* //  onChange={(e) => setUserEmail(e.target.value)} /> */}
        </label>
      </div>
      <div className="formRow">
      {/* <div className="formRow"> */}
        <label>Password:
            <input type="password" defaultValue={form.password} name="password"/>
            {/* <input type="password" defaultValue={form.email} name="email"/>            */}
          {/* <input autoComplete="true" type="password" value={userPassword} name="password"/> */}
             {/* onChange={(e) => setUserPassword(e.target.value)} />  */}
        </label> 
      </div>         
      <button type="submit">Submit</button>  
    </form>
  );
}
// try removing the onChange prop and typing in a field