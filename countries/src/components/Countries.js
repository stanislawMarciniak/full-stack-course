const Countries = ({ filteredCountries }) => {
  return (
    <>
      {filteredCountries.map((country, i) => (
        <div key={i}> {country.name}</div>
      ))}
    </>
  );
};

export default Countries;
