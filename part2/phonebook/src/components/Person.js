
import React from 'react'

const Person = ({person, deletePerson}) => {
    console.log("here: ", person)
    return (
        <div>
            {person.name} {person.number} <button onClick={() => deletePerson(person)}>del</button>
        </div>
    )
}

export default Person