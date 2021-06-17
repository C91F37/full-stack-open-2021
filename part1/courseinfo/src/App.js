import React from 'react'

const Header = (props) =>(
    <>
      <h1>{props.name}</h1>
    </>
  )


const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
  <p>
  {props.part.name} {props.part.exercises}
  </p>
)}


const Total = (props) => {
  return (
  <p>Number of exercises {props.total}</p>
)}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts=[part1, part2, part3]

  return (
    <div>
      <Header name={course} />
      <Content parts={parts} />
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

export default App