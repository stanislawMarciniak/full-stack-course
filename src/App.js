import { useState } from 'react'

const Button = ({setType, type, text}) => <button onClick={() => setType(type + 1)}>{text}</button>

const StatisticsLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {

  const all = good + neutral + bad
  const average = (good*(1) + neutral*(0) + bad*(-1)) / (all)

  if (all === 0) {
    return( 
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
      )
  }

  return(
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={average} />
          <StatisticsLine text="positive" value={good/(all) * 100 + "%"} />
        </tbody>
      </table>
    </div>
  )

}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button setType={setGood} type={good} text="good"/>
      <Button setType={setNeutral} type={neutral} text="neutral"/>
      <Button setType={setBad} type={bad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App