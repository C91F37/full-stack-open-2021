import React, { useState } from 'react'

const Statistics = ({good, bad, neutral}) => {
  let all = good + bad + neutral
  console.log(all)
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
        good {good} <br/>
        neutral {neutral} <br/>
        bad {bad} <br/>
        all {good+neutral+bad} <br/>
        average {(good-bad)/(good+neutral+bad)} <br/>
        positive {good * 100/(good+neutral+bad)} %
      </div>
    )
  }

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App