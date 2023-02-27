import { useState } from 'react'

import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      content: 'Arto Hellas' ,
      phone: '555-555-5555',
      id: 1,
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    let help = 1
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].content === newName) {
        alert(`${newName} is already added to phonebook`)
        help--
      }
    }
    if(help) {
      const personObject = {
      content: newName,
      phone: newPhone,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    }

    setNewName('')
    setNewPhone('')
  }

  const handlePersonChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName}
            onChange={handlePersonChange}
          />
        </div> 
        <div>
          number: 
          <input 
            value={newPhone}
            onChange={handlePhoneChange}
          />
        </div>
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Name key={person.id} person={person} />
      )}
    </div>
  )
}

export default App