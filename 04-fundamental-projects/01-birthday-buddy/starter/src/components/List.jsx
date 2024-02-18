import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person styleClass="person" key={person.id} person={person} />;
      })}
    </div>
  );
};
export default List;
