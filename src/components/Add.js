import { useState } from "react";

const Add = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handlePersonChange = ({ target }) => setNewName(target.value);
  const handlePhoneChange = (event) => setNewPhone(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    let help = 1;
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].content === newName) {
        alert(`${newName} is already added to phonebook`);
        help--;
      }
    }
    if (help) {
      const personObject = {
        content: newName,
        phone: newPhone,
        id: persons.length + 1,
      };

      setPersons(persons.concat(personObject));
    }

    setNewName("");
    setNewPhone("");
  };

  return (
    <>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input name="person" value={newName} onChange={handlePersonChange} />
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
