import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = (props) => {
  
  if (props.allClicks === 0) {
    return (
      <div>
        <p>
            <b>statistics</b>
        </p>
        <p>
            No feedback given
        </p>
      </div>
    )
  }


  return (
    <div>
    <p>
      <b>statistics</b>
    </p>
    <p>
        good {props.good}
    </p>
    <p>
        neutral {props.neutral}
     </p>
     <p>
       bad {props.bad}
     </p>
     <p>
       all {props.allClicks}
     </p>
     <p>
       average {props.average} 
     </p>
     <p>
      positive {props.positive}  %
     </p> 
    </div>
    )
}


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
    
  const Button = ({ onClick, text }) => (  <button onClick={onClick}>    {text}  </button>)


  return (
    <div>
      <p>  
      <b>give feedbeck</b>
      </p>
      <p>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />   
      
       </p>
      <p>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} average={average}
        positive={positive}    />
      </p>
     
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
