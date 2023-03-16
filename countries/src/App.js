import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(
    () =>
      axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
        setCountries(response.data);
      }),
    []
  );

  return (
    <div>
      <form>
        find country
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
