import React from "react";

const PersonForm = ({addPerson, onNameChange, newName, onNumberChange, newNumber}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input onChange={onNameChange} value={newName} />
      </div>
      <div>
        number: <input onChange={onNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
