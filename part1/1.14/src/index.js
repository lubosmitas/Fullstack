import React, { useState } from 'react'
import ReactDOM from 'react-dom'


    
const Button = ({ onClick, text }) => ( 
  <button onClick={onClick}>   {text}  </button>
)
const Vote = ({ selected, points }) => {
    
    switch(selected) {
      case 0:
        return (
          <div> <p>Anecdote {selected} has {points.a0} votes</p> </div>
        )
      case 1:
        return (
          <div> <p>Anecdote {selected} has {points.a1} votes</p> </div>
        )
      case 2:
        return (
          <div> <p>Anecdote {selected} has {points.a2} votes</p> </div>
        )
      case 3:
        return (
          <div> <p>Anecdote {selected} has {points.a3} votes</p> </div>
        )
      case 4:
        return (
          <div> <p>Anecdote {selected} has {points.a4} votes</p> </div>
        )
      case 5:
        return (
          <div> <p>Anecdote {selected} has {points.a5} votes</p> </div>
        )
      default:
        return (
          <div> <p>Anecdote {selected}nothing selected</p> </div>
        )
  } 
}
 
const MostVotes = ({ points }) => {
        let highest = 0
        let mostVotes = 0
        if (points.a0 > highest) { 
            highest = points.a0
            mostVotes = 0
        }
        if (points.a1 > highest) { 
            highest = points.a1
            mostVotes = 1 
        }
        if (points.a2 > highest) { 
            highest = points.a2
            mostVotes = 2 
        }
        if (points.a3 > highest) { 
            highest = points.a3
            mostVotes = 3 
        }
        if (points.a4 > highest) { 
            highest = points.a4
            mostVotes = 4 
        }
        if (points.a5 > highest) { 
            highest = points.a5
            mostVotes = 5 
        }
        
        if (highest === 0) {
            return (
              <div> 
              <h1>Anecdote with most votes</h1> 
              <p>
              No vote was procesesed.
              </p>
                   
              </div> )
        } else {
          return (
            <div> 
            <h1>Anecdote with most votes</h1> 
            <p>
            {anecdotes[mostVotes]}
            </p>
            has {highest} votes     
            </div>
          ) 
        }
}
  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    a0: 0, a1: 0, a2: 0, a3: 0, a4: 0, a5: 0
  })
 
  const handleVote = () => {  
    const increase = [0,0,0,0,0,0]
     increase[selected] = increase[selected] + 1
     
    const newVote = { 
      a0: points.a0 + increase[0], 
      a1: points.a1 + increase[1],
      a2: points.a2 + increase[2],
      a3: points.a3 + increase[3],
      a4: points.a4 + increase[4],
      a5: points.a5 + increase[5]
    }
    // increment the property 2 value by one
    //newVote[0] += 1     
    setPoints(newVote)
    }
  const rnd = () => {
    let x = Math.round(Math.random()*5)
    setSelected(x)
   } 

  return (
    <div>
      <h1>Anecdote of the day</h1>  
      {props.anecdotes[selected]}
      <Vote selected={selected} points={points}/>
      <Button onClick={handleVote} text="vote" selected={selected} />
      <Button onClick={rnd} text="next anecdote"/>
      <MostVotes points={points}/>



    </div>
  )
  
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
