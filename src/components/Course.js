const Course = ({course}) => {
    console.log({course})
    return (
      <>
        <Header course = {course.name}/>
        <Content parts = {course.parts}/>
        <Total parts = {course.parts}/>
      </>
    )
  }
  const Header = ({course}) => <h2>{course}</h2>
  
  const Part = ({name, exercises}) => <p>{name} {exercises}</p>
  
  const Content = ({parts}) => parts.map(part => 
    <Part key={part.id} name={part.name} exercises={part.exercises} />)
  
  const Total = ({parts}) => {
    console.log({parts})
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <>
        <p><b>total of {total} exercises</b></p>
      </>
    )
  }

  export default Course