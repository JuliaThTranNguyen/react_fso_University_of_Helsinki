import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Info from "./components/Info";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Search search={search} onSearchChange={onSearchChange} />
      {filteredCountries.length > 10 ? (
        <div>Too many countries</div>
      ) : filteredCountries.length === 1 ? (
        <Info country={filteredCountries[0]} />
      ) : (
        filteredCountries.map((country) => <Country country={country} />)
      )}
    </div>
  );
}

export default App;