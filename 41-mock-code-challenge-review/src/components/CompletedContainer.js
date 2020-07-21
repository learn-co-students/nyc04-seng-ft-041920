import React from 'react'
import ToDoCard from './ToDoCard'

const CompletedContainer = (props) => {

    const renderTodos = () => {
        return props.todos.map(todo =>
            <ToDoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                toggleComplete={props.toggleComplete}
                removeTodo={props.removeTodo}
            />
        )
    }

    return (
        < div >
            <h1>Completed Todos</h1>
            {renderTodos()}
        </div >
    )
}

export default CompletedContainer