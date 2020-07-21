import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    title: ""
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        completed: false
      })
    })
      .then(r => r.json())
      .then(newTodo => {

        this.props.handleAddTodo(newTodo)
      })

  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit} >
          <h1>New ToDo</h1>
          <div className="field">
            <label>Title</label>
            <input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
