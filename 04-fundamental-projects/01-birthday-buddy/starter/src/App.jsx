/***
- Import the data you want to render in App.jsx.
- Set up the data as a state variable using useState.
- Use the map method to iterate over the data array and render a Person component for each person.
- Each Person component should render an image with a style prop to control the width, the person's name, and the person's age.
- Create a List component that holds the rendered items.
- Create a button with functionality to clear the list.
- Display the number of items in the list using the length property of the state variable. This can be rendered using plain text or added to a message or heading element.
***/

import { useState } from "react";
import peopleData from "./data";
import Person from "./components/Person";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(peopleData);
  const clear = () => {
    setPeople([]);
  };
  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clear}>
          Clear List
        </button>
      </div>
    </main>
  );
};
export default App;
