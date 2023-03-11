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
    console.log(person.name);
    return person.name.toLowerCase().includes(newFilter.toLowerCase());
  });

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Add key={persons.id} persons={persons} setPersons={setPersons} />
      <Name filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
