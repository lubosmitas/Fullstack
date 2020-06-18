import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />   
      
      
      
      <p>
      <b>statistics</b>
      </p>
      <p>
      good {good}
      </p>
      <p>
      neutral {neutral}
      </p>
      <p>
      bad {bad}
      </p>
      <p>
      all {allClicks}
      </p>
      <p>
      average {average}
      </p>
      <p>
      positive {positive}  %
      </p>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
