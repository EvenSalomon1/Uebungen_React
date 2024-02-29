import "./Dropdown.css";
import { useState } from "react";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <section>
      <div>
        <p>Why is React great?</p>
        <button onClick={() => setDropdown((dropdown) => !dropdown)}>#</button>
      </div>
      <hr></hr>
      <p>{dropdown ? "Fast Learning Curve" : ""}</p>
    </section>
  );
};

export default Dropdown;
