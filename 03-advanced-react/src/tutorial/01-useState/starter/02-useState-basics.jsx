import { useState } from "react";

const UseStateBasics = () => {
  // useState
  // returns default value specified or undefined if blank
  // returns function that handles rerendering the variable
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // you are allowed to pass anything into this method
    // ++ or -- does not work
    setCount(count + 1);
  }

  return (
    <div>
      <h2>useState Demonstration</h2>
      <h3>{count}</h3>
      <button type="button" onClick={handleClick} className="btn">
        Increase
      </button>
    </div>
  )
};

export default UseStateBasics;
