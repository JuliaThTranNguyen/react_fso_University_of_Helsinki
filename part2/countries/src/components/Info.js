import React, { useState, useEffect } from "react";
import axios from "axios";

//pls install : npm i axios dotenv --save

const Info = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log("get weather api");
    axios
      .get(
        `  http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
      });
      // eslint-disable-next-line
  }, [country.capital]);

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
          <p>Weather in {weather.location.name}</p>
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
