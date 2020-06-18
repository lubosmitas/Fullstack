import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Part1 = (props)  => {
 const exercises1 = 10
    return (
      <div>
        <p>
          Fundamentals of React {exercises1}
        </p>
      </div>
  )
}

const Part2 = (props)  => {
 const exercises2 = 7
    return (
      <div>
        <p>
          Using props to pass data {exercises2}
        </p>
      </div>
  )
}

const Part3 = (props)  => {
 const exercises3 = 14
    return (
      <div>
        <p>
          State of a component {exercises3}
        </p>
      </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
     Number of exercises {props.total}
    </div>
  )
}

const App = () => {
  
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <div>
      <Header course = 'Half Stack application development' />
      <Content 
      />
      <Total 
       total = {exercises1+exercises2+exercises3}    
      />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))