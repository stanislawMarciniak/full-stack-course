import { useState } from "react";

import Country from "./Country";

const Countries = ({ filteredCountries, isLoaded, setIsLoaded }) => {
  const [shownCountry, setShownCountry] = useState(null); //zmienic na obiekt (polaczyc z isLoaded)

  const handleButtonClick = (index) => {
    setIsLoaded(true);
    setShownCountry(filteredCountries.find((n, i) => i === index));
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
        <Country country={shownCountry} />
      ) : (
        <div>
          {filteredCountries.map((country, i) => (
            <div key={i}>
              {country.name.common}{" "}
              <button onClick={handleButtonClick(i)}>show</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Countries;
