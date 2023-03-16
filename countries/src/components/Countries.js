import { useState } from "react";
import Country from "./Country";

const Countries = ({ filteredCountries }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleButtonClick = () => {
    setIsLoaded(true);
  };

  if (filteredCountries.length > 10)
    return <>Too many matches, specify another filter</>;

  if (filteredCountries.length === 1) {
    console.log(filteredCountries[0].name.common + " countries");
    return <Country country={filteredCountries[0]} />;
  }

  return (
    <>
      {isLoaded ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <div>
          {filteredCountries.map((country, i) => (
            <div key={i}>
              {country.name.common}{" "}
              <button onClick={handleButtonClick}>show</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
