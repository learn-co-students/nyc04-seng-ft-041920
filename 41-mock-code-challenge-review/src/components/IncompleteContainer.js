import React, { Component } from 'react';
import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'

export default class IncompleteContainer extends Component {

  state = {
    searchTerm: ""
  }

  handleOnChange = searchTerm => {
    this.setState({ searchTerm })
  }

  renderTodos() {
    const filteredTodos = this.props.todos.filter(todo => {
      return todo.title
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase())
    })

    return filteredTodos.map(todo =>
      <ToDoCard
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        toggleComplete={this.props.toggleComplete}
        removeTodo={this.props.removeTodo}
      />
    )
  }

  render() {
    return (
      <div>
        <h1>Incomplete Todos</h1>
        <SearchBarComponent searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        {this.renderTodos()}
      </div>
    )
  }
}
