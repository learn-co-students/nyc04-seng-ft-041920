import React from 'react'

const ToDoCard = (props) => {
  const className = `ui button ${props.completed ? "orange" : "blue"}`

  const updateTodo = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        completed: !props.completed
      })
    })
      .then(r => r.json())
      .then(updatedTodo => {
        props.toggleComplete(updatedTodo)
      })
  }

  const deleteTodo = () => {
    fetch(`http://localhost:3000/todos/${props.id}`, {
      method: "DELETE",
    })

    // optimistic rendering
    props.removeTodo(props.id)
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{props.title}</div>
        {/* The button will require some conditional rendering. 
            If the button is under the Incomplete Container, button should be blue and text should say Complete
            If the button is under Complete Container, button should be orange and text should say Incomplete 
            */}
        <button onClick={updateTodo} className={className}>{props.completed ? "Incomplete" : "Complete"}</button>
        <button onClick={deleteTodo} className="ui button red">Delete</button>
      </div>

    </div>
  )
}

export default ToDoCard