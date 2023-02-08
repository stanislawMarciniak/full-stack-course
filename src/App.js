const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises1: 10,
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises2: 7,
  }

  const part3 = {
    name: 'State of a component',
    exercises3: 14,
  }

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1.name} exercises1 = {part1.exercises1} part2 = {part2.name} exercises2 = {part2.exercises2} part3 = {part3.name} exercises3 = {part3.exercises3}/>
      <Total exercises1 = {part1.exercises1} exercises2 = {part2.exercises2} exercises3 = {part3.exercises3}/>
    </div>
  )
}

export default App
