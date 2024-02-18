import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    // This does not IMMEDIATELY update state
    // it schedules an update by telling react it needs to re-render the component
    setCount(count + 1);
    console.log(count);
  }

  return(
    <div>
      <h2>UseStateGotcha</h2>
      <h3>Count: {count}</h3>
      <button type="button" className="btn" onClick={handleClick}>Increase Count</button>
    </div>
  )
};

export default UseStateGotcha;
