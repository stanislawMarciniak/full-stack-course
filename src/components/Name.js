const Name = ({filteredPersons}) => {
    return (
        <>
        <h2>Numbers</h2>
        {filteredPersons.map(person =>
            <div> {person.content} {person.phone}</div>
        )}
        </>
    )
}

export default Name