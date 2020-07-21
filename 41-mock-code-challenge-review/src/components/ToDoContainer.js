import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

import { getTodos, getTodosVersion2 } from '../fetches'

export default class ToDoContainer extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    getTodos()
      .then(todos => {

        this.setState({
          todos: todos
        })
      })
  }

  addTodo = newTodo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }))
  }

  // setState with a new array
  // Create => spread => [...this.state.todos, newTodo]
  // Update => map => use map to iterate over the array and just replace on object
  // Delete => filter => this.state.todo.filter(todo => todo.id !== id)

  removeTodo = id => {
    const updatedTodos = this.state.todos.filter(todo => {
      if (todo.id !== id) {
        return true
      } else {
        return false
      }
    })

    this.setState({
      todos: updatedTodos
    })
  }

  toggleComplete = updatedTodo => {
    // create a new array 
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === updatedTodo.id) {
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
        <NewToDoForm handleAddTodo={this.addTodo} />
        <CompletedContainer
          toggleComplete={this.toggleComplete}
          removeTodo={this.removeTodo}
          todos={this.getCompletedTodos()}
        />
        <IncompleteContainer
          toggleComplete={this.toggleComplete}
          removeTodo={this.removeTodo}
          todos={this.getIncompleteTodos()}
        />
      </div>
    );
  }
}
