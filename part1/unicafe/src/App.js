import React, { useState } from 'react'

const Statistic = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  let all = good + bad + neutral
  if (all === 0) {
    return (
      <div>
      <h2>statistics</h2>
      No feedback
    </div>
      
    )
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic text='good' value ={good}/>
            <Statistic text='neutral' value ={neutral}/>
            <Statistic text='bad' value ={bad}/>

            <tr><td>all</td><td>{all}</td></tr>
            <tr><td>average</td><td>{(good-bad)/(good+neutral+bad)}</td></tr>
            <tr><td>positive</td><td>{good * 100/(good+neutral+bad)} %</td></tr>
          </tbody>
        </table>
    
      </div>
    )
  }
}

const Button = (props) => {
  return(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={()=>setGood(good+1)} text='Good' />
      <Button handleClick={()=>setNeutral(neutral+1)} text='Neutral' />
      <Button handleClick={()=>setBad(bad+1)} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App