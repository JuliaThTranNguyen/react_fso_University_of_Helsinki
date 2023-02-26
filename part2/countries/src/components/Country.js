import React, { useState } from "react";
import Info from "./Info";

const Country = ({ country }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? <Info country={country} /> : country.name}{" "}
      <button onClick={() => setShow(!show)}>show</button>
    </div>
  );
};

export default Country;
