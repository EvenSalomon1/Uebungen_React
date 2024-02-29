import "./Input.css";
import { useState } from "react";

const Input = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="firstname"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </form>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default Input;
