const Name = ({ filteredPersons, togglePersonDelete }) => {

  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person, i) => (
        <div key={i}>
          {" "}
          {person.name} {person.number} <button onClick={togglePersonDelete} >delete</button>
        </div>
      ))}
    </>
  );
};

export default Name;
