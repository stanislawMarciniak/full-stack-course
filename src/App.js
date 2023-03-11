import { useState, useEffect } from "react";

import axios from "axios";
import Name from "./components/Name";
import Add from "./components/Add";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const filteredPersons = persons.filter((person) => {
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
