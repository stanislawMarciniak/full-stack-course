import { useState } from 'react'

import Name from './components/Name'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      content: 'Arto Hellas' ,
      id: 1,
    }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      content: newName,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
          name: 
          <input 
            value={newName}
            onChange={handlePersonChange}
          />
          <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        <ul>
        {persons.map(person =>
          <Name key={person.id} person={person} />
        )}
        </ul>
      </ul>
    </div>
  )
}

export default App