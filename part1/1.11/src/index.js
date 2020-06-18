import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {

 return (
      <div>
            <h2>give feedbeck</h2>
      </div>
    )
}

const Stat = ({ title, value }) => {

if (title === "positive") {
  return (
      <tbody>
      <tr><td>{title}: </td><td>{value} %</td></tr>
    </tbody>
    )
  } else {
  return (
    <tbody>
      <tr><td>{title}: </td><td>{value} </td></tr>
    </tbody>
    )
  }
}

const Statistics = (props) => {
  
  if (props.allClicks === 0) {
    return (
      <div>
            <h2>statistics</h2>
        <p>
            No feedback given
        </p>
      </div>
    )
  }


  return (
    <div>
      <h2>statistics</h2>
    </div>  
        
    )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>    {text}  </button>
)   
  
const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)


  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
    setAverage( ( (good + 1) + (-1 * bad) ) / (allClicks + 1) )
    setPositive( ( (good + 1) ) / (allClicks + 1) * 100)
  }
  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)
    setAverage( ( good  + (-1 * bad) ) / (allClicks + 1) )
    setPositive( (good) / (allClicks + 1)  * 100)
  }
  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    setAverage( ( good + (-1 * (bad + 1) )) / (allClicks + 1) )
    setPositive( ( good ) / (allClicks + 1) * 100)
  }
    
   return (
    <div>

      <Header />

      <p>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />   
      
       </p>

        <Statistics allClicks={allClicks}    />

        <table>
        <Stat title="good" value={good} />
        <Stat title="neutral" value={neutral} />
        <Stat title="bad" value={bad} />
        <Stat title="average" value={average} />
        <Stat title="positive" value={positive}/>
        </table>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
