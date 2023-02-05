import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  if (text === "positive"){
    return (
      <tr>
      <td>{text}</td> <td>{value}%</td>
    </tr>
    )
  }
  return(
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if(all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <Statistic text="good" value={ good }/>
      <Statistic text="neutral" value={ neutral }/>
      <Statistic text="bad" value={ bad }/>
      <Statistic text="all" value={ all }/>
      <Statistic text="average" value={ ( (good*1 + bad*-1)/all ).toFixed(2) }/>
      <Statistic text="positive" value={ ( (good/all)*100 ).toFixed(2)}/>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviewGood = () => {
    setGood(good + 1)
  }
  const reviewNeutral = () => {
    setNeutral(neutral + 1)
  }
  const reviewBad = () => {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <p>Give feedback</p>
      <Button handleClick={reviewGood} text ='good'/>
      <Button handleClick={reviewNeutral} text ='neutral'/>
      <Button handleClick={reviewBad} text ='bad'/>
      <p>Statistics</p>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App