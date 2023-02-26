
import React, { useState, useEffect, useMemo } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import service from "./services/service";
import "./index.css";


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [successfulNoti, setSuccessfulNoti] = useState(true);

  //getAll data
  useEffect(() => {
    service.getAll().then((data) => {

      setPersons(data);
    });
  }, []);

//add new one to the list
  const addPerson = (event) => {
    event.preventDefault();
    //check existing name
    if (persons.some((person) => newName === person.name)) {
      const replace = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      if (replace) {
        //find the person is already existed, then change number to a new one
        const replacePerson = persons.find((person) => person.name === newName);
        const updatedNumber = { ...replacePerson, number: newNumber };
        service
          .update(replacePerson.id, updatedNumber)
          .then((person) => {
            setPersons(
              persons.map((p) =>
                p.id === replacePerson.id ? updatedNumber : p
              )
            );
            setSuccessfulNoti(true);
            setMessage(`${updatedNumber.name}'s number updated`);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          })
          .catch((error) => {
            setSuccessfulNoti(false);
            setMessage(error.response.data.error);
            setTimeout(() => {
              setMessage(null);
            }, 3000);
          });
      }
      return;
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      service
        .create(newPerson)
        .then((newPerson) => {
          setPersons(persons.concat(newPerson));
          setNewName("");
          setNewNumber("");
          setSuccessfulNoti(true);

          setMessage(`Added ${newName}`);
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        })
        .catch((error) => {
          setSuccessfulNoti(false);
          setMessage(error.response.data.error);
          setTimeout(() => {
            setMessage(null);
          }, 3000);
        });
    }
  };

  //delete someone
  const deletePerson = (person) => {
    const confirm = window.confirm(`Delete ${person.name} ?`);
    if (confirm) {
      service.del(person.id);
      setPersons(persons.filter((n) => n.id !== person.id));
      setSuccessfulNoti(false);
      setMessage(`Information of ${person.name} has already been removed from the server`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

    //input handling
  const onNameChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const onNumberChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  };
  const onSearchChange = (event) => {
    event.preventDefault();
    setNewSearch(event.target.value);
  };
  
  const map = useMemo(() => {
    return(
      persons.map((person) => {
        if(newSearch !== "") {
          if(person.name.toLowerCase().includes(newSearch.toLowerCase()) ) {
            return <Person person={person} deletePerson={deletePerson}/>
          } else {
            return <div></div>
          }
        } else {
          return <Person person={person} deletePerson={deletePerson}/>
        }
      })
    );
    // eslint-disable-next-line
  }, [persons, newSearch]);


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} state={successfulNoti} />
      <Filter onChange={onSearchChange} value={newSearch} />

      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        onNameChange={onNameChange}
        newName={newName}
        onNumberChange={onNumberChange}
        newNumber={newNumber}
      />
     
      <h2>Numbers</h2>
      {map}
    </div>
  );
};

export default App;