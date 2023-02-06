import React from "react";

const Filter = ({onChange, value}) => {
  return (
    <div>
      <div>filter shown with</div>
      <input onChange={onChange} value={value} />
    </div>
  );
};

export default Filter;
