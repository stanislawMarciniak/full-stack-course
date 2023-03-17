import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [capital]);

  if (!weatherData) {
    return null;
  }

  return (
    <div class="weather-text">
      <h2>Weather in {capital}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <img
        class="weather-icon"
        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        alt={weatherData.weather[0].description}
      />
      <p>Wind: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
