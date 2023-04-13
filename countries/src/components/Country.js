import Weather from "./Weather";

const Country = (country) => {
  console.log(country);
  const languages = Object.values(country.country.languages);

  return (
    <>
      <h1>{country.country.name.common}</h1>
      <div>
        Capital {country.country.capital}
        <br />
        Area {country.country.area} km²
        <br />
        Population {country.country.population}
      </div>
      <br />
      <div>
        <strong>languages:</strong>{" "}
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>
      <img
        className="flag"
        src={country.country.flags.png}
        alt={country.country.flags.alt}
      />
      <Weather capital={country.country.capital} />
    </>
  );
};

export default Country;
