const Add = () => {

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

    return (
    <>
        <h2>Phonebook</h2>
        <div>
            filter shown with
            <input
            value={newFilter}
            onChange={handleFilterChange}
            />
        </div>
        <h2>add a new</h2>
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
    </>
    )
}

export default App