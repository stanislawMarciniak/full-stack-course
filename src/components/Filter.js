const Filter = ({newFilter, handleFilterChange}) => {
    
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
        </>
    )
}

export default Filter;