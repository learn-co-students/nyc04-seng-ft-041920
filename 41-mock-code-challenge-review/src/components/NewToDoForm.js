import React, { Component } from 'react';

export default class NewToDoForm extends Component {
  render() {
    return (
      <div>
        <form className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
