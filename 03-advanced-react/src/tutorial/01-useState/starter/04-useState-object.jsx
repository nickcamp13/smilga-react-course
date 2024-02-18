import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Nick",
    age: 24,
    hobby: "Valorant",
  });

  const handleClick = () => {
    setPerson({
      name: "Yessir",
      age: 48,
      hobby: "Not Valorant",
    });
  };

  return (
    <div>
      <h2>useStateObject</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button type="button" onClick={handleClick} className="btn">
        Change Person
      </button>
    </div>
  );
};

export default UseStateObject;
