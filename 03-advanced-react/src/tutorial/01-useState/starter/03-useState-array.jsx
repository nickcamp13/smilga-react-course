import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (id) => {
    const newList = people.filter((person) => person.id !== id);
    setPeople(newList);
  };

  return (
    <div>
      <h2>UseStateArray</h2>
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear List
      </button>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              type="button"
              className="btn"
              onClick={() => handleRemove(id)}
            >
              Remove {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
