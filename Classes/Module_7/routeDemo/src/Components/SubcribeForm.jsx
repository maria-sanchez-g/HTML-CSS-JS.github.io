import { useState, useContext } from "react";
import { useFormInput } from "../Utlis/useFormInput";
import { UserContext } from "../Context/UserContext";

export default function SubscribeForm() {
  const [status, setStatus] = useState("");
  const { handleUpdateUser } = useContext(UserContext);
  // similar state variables mapped to form inputs
  const [firstNameinputProps, fristNameReset] = useFormInput("Mary");
  const [lastNameInputProps, lastNameReset] = useFormInput("Huang");

  const [emailInputProps, emailRest] = useFormInput("mary@poppins.com");
  // similar handler functions
  function handleSubscribe() {
    fristNameReset("");
    emailRest("");
    lastNameReset("");
    handleUpdateUser({
      firstName: firstNameinputProps.value,
      lastName: lastNameInputProps.value,
      email: emailInputProps.value,
    });
    setStatus("Thanks for subscribing!");
  }
  return (
    <div className="SubscribeForm componentBox">
      <label>
        First name:{" "}
        {/* form inputs with similar props
         */}
        <input {...firstNameinputProps} />
      </label>
      <label>
        Last name:{" "}
        {/* form inputs with similar props
         */}
        <input {...lastNameInputProps} />
      </label>
      <label>
        Email: {/* form inputs with similar props */}
        <input
          value={emailInputProps.value}
          onChange={emailInputProps.onChange}
        />
      </label>
      <button onClick={handleSubscribe}>Subscribe</button>
      <div>{status}</div>
    </div>
  );
}
