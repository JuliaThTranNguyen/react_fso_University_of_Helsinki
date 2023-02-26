import React, { useState, useEffect } from "react";
import axios from "axios";

const Info = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("get weather api");
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/weather?units=metric&q=${country}&appid=${api_key}`
      )
      .then((response) => {
        const temp = response.main.temp;
        const humidity = response.main.humidity;
        const wind = response.wind.speed;
        const sky = response.weather[0].description;
        const icon = response.weather[0].icon;
        setWeather({ temp, humidity, wind, sky, icon });
        setLoading(false);
      });
  }, [country, api_key]);

  return (
    <div>
      <p>Country: {country.name}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Languague</p>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        style={{ height: "25%", width: "25%" }}
        src={country.flag}
        alt={`${country.name} flag`}
      />
      {loading ? (
        "Loading"
      ) : (
        <div>
          <p>Weather in {weather.locastion.name}</p>
          <p>Temperature: {weather.current.temperature}</p>
          <img src={weather.current.weather_icons[0]} alt="weather icon"/>
          {console.log(weather.current.weather_icons[0])}
          <p>
            Wind: {weather.current.wind_speed} mph heading{" "}
            {weather.current.wind_dir}
          </p>
        </div>
      )}      
    </div>
  );
};

export default Info;
