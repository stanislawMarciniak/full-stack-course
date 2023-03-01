import { useState } from "react";

import Name from "./components/Name";
import Add from "./components/Add";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {
      content: "Arto Hellas",
      phone: "555-555-5555",
      id: 1,
    },
  ]);
  const [newFilter, setNewFilter] = useState("");

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const filteredPersons = persons.filter((person) =>
    person.content.toLowerCase().includes(newFilter.toLowerCase())
  );

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Add key={persons.id} persons={persons} setPersons={setPersons} />
      <Name filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
