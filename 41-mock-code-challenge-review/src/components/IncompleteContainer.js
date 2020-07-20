import React, { Component } from 'react';
import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'

export default class IncompleteContainer extends Component {

  // When implementing the search bar, consider implementing state here to make it dynamic. 
  // i.e everytime you type in the input field, the ToDos are immediately filtered

  state = {
    searchTerm: "sleep"
  }

  // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
  // SearchBarComponent

  handleOnChange = (searchTerm) => {
    this.setState({ searchTerm: searchTerm })
  }

  // When implementing the search term, consider implementing a function that FILTERs the todos.
  // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

  renderTodos = () => {
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
      />
    )
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Incomplete Todos</h1>
        <SearchBarComponent searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        {/* Render ToDo Card for each ToDo */}
        {/* Which Array method can you use? */}
        {this.renderTodos()}
      </div>
    )
  }
}
