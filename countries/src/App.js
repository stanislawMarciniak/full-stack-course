<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(
    () =>
      axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
        setCountries(response.data);
      }),
    []
  );
  console.log("render", countries, "countries");

  const handleFilterChange = (event) => setFilter(event.target.value);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries filteredCountries={filteredCountries} />
>>>>>>> 01a9981869608ea18beee2364561af4ea67ef22c
    </div>
  );
}

export default App;
