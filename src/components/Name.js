const Name = ({ filteredPersons }) => {
  return (
    <>
      <h2>Numbers</h2>
      {filteredPersons.map((person, i) => (
        <div key={i}>
          {" "}
          {person.name} {person.number}
        </div>
      ))}
    </>
  );
};

export default Name;
