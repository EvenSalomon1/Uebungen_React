import "./Counter.css";
import { useState } from "react";

//   !Counter usestate
const Counter = () => {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  //   *Funktion für +1
  const add = () => {
    setCounter(counter + 1);
  };
  //   *Funktion für -1
  function minus() {
    setCounter(counter - 1);
  }
  return (
    <section>
      <button onClick={add}>+</button>
      <p>{counter}</p>
      <button onClick={minus}>-</button>
    </section>
  );
};

export default Counter;
