import "./Darkmode.css";
import { useState } from "react";

const Darkmode = () => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <section className={darkmode ? "" : "dark"}>
      <h1>{darkmode ? "Day" : "Night"}</h1>
      <button onClick={() => setDarkmode((darkmode) => !darkmode)}>
        Change to {darkmode ? "Night" : "Day"}
      </button>
    </section>
  );
};

export default Darkmode;
