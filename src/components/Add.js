import { useState } from "react";

import personService from "../services/persons";

const Add = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePersonChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    let help = 1;

    const namesArray = persons.map((person) => person.name);

    if (namesArray.includes(newName)) {
      alert(
        `${newName} is already added to phonebook, replace the old number with a new one`
      );
    }

    let maxIndex = persons.reduce((max, person) => {
      return Math.max(max, person.id);
    });

    if (!namesArray.includes(newName)) {
      const personObject = {
        name: newName,
        number: newPhone,
        id: maxIndex + 1,
      };
      maxIndex++;
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewPhone("");
      });
    }
  };

  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Add;
