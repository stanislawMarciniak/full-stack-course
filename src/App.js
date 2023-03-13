import { useState, useEffect } from "react";

import Name from "./components/Name";
import Add from "./components/Add";
import Filter from "./components/Filter";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(newFilter.toLowerCase());
  });

  const togglePersonDelete = (id) => {
    const deletedPerson = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${deletedPerson.name} ?`))
      personService.deletePerson(id).then(() => {
        setPersons(
          persons.filter((returnedPerson) => returnedPerson.id !== id)
        );
        console.log("deleted", persons);
      });
  };

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Add key={persons.id} persons={persons} setPersons={setPersons} />
      <Name
        filteredPersons={filteredPersons}
        togglePersonDelete={togglePersonDelete}
      />
    </div>
  );
};

export default App;
