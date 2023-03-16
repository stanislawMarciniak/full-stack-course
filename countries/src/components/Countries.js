import Country from "./Country";

const Countries = ({ filteredCountries }) => {
  const handleClick = (i) => filteredCountries.find((n, index) => index === i);

  if (filteredCountries.length > 10)
    return <>Too many matches, specify another filter</>;

  if (filteredCountries.length === 1) {
    console.log(filteredCountries[0].name.common + " countries");
    return <Country country={filteredCountries[0]} />;
  }

  return (
    <>
      {filteredCountries.map((country, i) => (
        <div key={i}>
          {country.name.common}{" "}
          <button onClick={() => handleClick(i)}>show</button>
        </div>
      ))}
    </>
  );
};

export default Countries;
