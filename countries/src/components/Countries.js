import Country from "./Country";

const Countries = ({ filteredCountries }) => {
  if (filteredCountries.length > 10)
    return <>Too many matches, specify another filter</>;

  if (filteredCountries.length === 1) {
    console.log(filteredCountries[0].name.common + " countries");
    return <Country country={filteredCountries[0]} />;
  }

  return (
    <>
      {filteredCountries.map((country, i) => (
        <div key={i}> {country.name.common}</div>
      ))}
    </>
  );
};

export default Countries;
