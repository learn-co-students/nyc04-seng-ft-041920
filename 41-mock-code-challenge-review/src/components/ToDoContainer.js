import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/todos")
      .then(r => r.json())
      .then(todos => {

        this.setState({
          todos: todos
        })
      })
  }

  toggleComplete = updatedTodo => {
    // create a new array 
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        // todo.completed = !todo.completed // this is mutating state!
        return updatedTodo
      } else {
        return todo
      }
    })

    // re-render
    this.setState({
      todos: updatedTodos
    })
  }

  getCompletedTodos() {
    return this.state.todos.filter(todo => todo.completed)
  }

  getIncompleteTodos() {
    return this.state.todos.filter(todo => !todo.completed)
  }

  render() {
    console.log(this.state)
    return (
      <div id="todo-container">
        <NewToDoForm />
        <CompletedContainer toggleComplete={this.toggleComplete} todos={this.getCompletedTodos()} />
        <IncompleteContainer toggleComplete={this.toggleComplete} todos={this.getIncompleteTodos()} />
      </div>
    );
  }
}
