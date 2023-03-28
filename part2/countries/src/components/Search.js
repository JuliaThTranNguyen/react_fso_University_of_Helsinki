import React from "react";

const Search = ({ search, onSearchChange }) => {
  return (
    <div>
      <div>Find countries</div>
      <input value={search} onChange={onSearchChange}></input>
    </div>
  );
};

export default Search;
