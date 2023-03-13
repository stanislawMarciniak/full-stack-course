import { useState, useEffect } from "react";

import Name from "./components/Name";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);

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

  let typeOfNotification = "notification";

  const togglePersonDelete = (id) => {
    const deletedPerson = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${deletedPerson.name} ?`))
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(
            persons.filter((returnedPerson) => returnedPerson.id !== id)
          );
        })
        .catch((error) => {
          typeOfNotification = "error";
          setNotificationMessage(
            `${deletedPerson.name} was already removed from server`
          );
          typeOfNotification = "notification";
          setTimeout(() => {
            setNotificationMessage(null);
          }, 4000);
          setPersons(persons.filter((n) => n.id !== id));
          console.log("deleted", persons);
        });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Add
        key={persons.id}
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        typeOfNotification={typeOfNotification}
      />
      <Name
        filteredPersons={filteredPersons}
        togglePersonDelete={togglePersonDelete}
      />
    </div>
  );
};

export default App;
