import { useState } from "react";

const Person = ({ person, styleClass }) => {
  const [individual, setPerson] = useState(person);

  return (
    <div className={`${styleClass} `}>
      <img className="img" src={individual.image} />
      <div>
        <h4>{individual.name}</h4>
        <p>{individual.age}</p>
      </div>
    </div>
  );
};
export default Person;
