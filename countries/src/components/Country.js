const Country = (country) => {
  console.log(country);
  const languages = Object.values(country.country.languages);

  return (
    <>
      <h1>{country.country.name.common}</h1>
      <div>
        capital {country.country.capital}
        <br />
        area {country.country.area}
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
      <img src={country.country.flags.png} alt={country.country.flags.alt} />
    </>
  );
};

export default Country;
