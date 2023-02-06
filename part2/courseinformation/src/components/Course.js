import React from 'react'

const Sum = ({course}) => {
    let total = course.parts.reduce((prevValue, curValue) => 
      prevValue + curValue.exercises, 0
    )
    
    return (
      <div><b>Total of exercise: {total}</b></div>
    )
}
  
const Header = ({course}) => {
    return (
        <h3><b>{course.name}</b></h3>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercises}</p> 
    )
}

const Content = ({course}) => {
    return (
        <div>
            {course.parts.map(part =>
                <Part key={part.id} part={part}/>
            )}
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content course={course}/>
            <Sum course={course}/>
        </div>
    )
}

export default Course