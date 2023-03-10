import { useState } from "react";

import axios from "axios";

const Add = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePersonChange = (event) => setNewName(event.target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    let help = 1;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
        help--;
      }
    }
    if (help) {
      const personObject = {
        name: newName,
        number: newPhone,
        id: persons.length + 1,
      };

      const request = axios.post("http://localhost:3001/persons", personObject);
      request.then((response) => {
        setPersons(persons.concat(response.data));
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
          name:
          <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number:
          <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default Add;
