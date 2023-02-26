import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Info from "./components/Info";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries]=useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const onSearchChange = (e) => {
    const x = e.target.value;
    setSearch(x);

    if (x.length){
      const filter = countries.filter((country) => 
      country.name.toLowerCase().includes(x.toLowerCase()));
      setFilteredCountries(filter)
    }else {
      setFilteredCountries([]);
    }
    
  };
  const limit = 10;
  const displayList = filteredCountries.length <= limit;


  return (
    <div className="App">
      <Search search={search} onSearchChange={onSearchChange} />
      {filteredCountries.length > 10 ? (
        <div>Too many countries</div>
      ) : displayList ? (
        <Info country={filteredCountries[0]} />
      ) : (
        filteredCountries.map((country) => <Country country={country} />)
      )}
    </div>
  );
}

export default App;
