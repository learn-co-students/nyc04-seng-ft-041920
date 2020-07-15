State, Events, and Conditional Rendering
===

## SWBATs
- [ ] Explain why we use controlled forms
- [ ] Implement a controlled form
- [ ] Draw a component hierarchy and describe the Flow of Information
- [ ] Pass data up and down the component hierarchy with our callbacks
- [ ] Use form data to update state in various ways

## Outline
- [ ] Create a form and make it controlled
- [ ] Handle submitting the form and update state in parent using inverse data flow
- [ ] Get more practice with controlled forms/inverse data flow by adding additional features

## Lecture Notes

New album form - add a new album to our list of albums and save to the backend
- [ ] Create controlled form
- [ ] Make POST request
- [ ] Set state for albums (lift state up)

Side Menu - add links to show different 'pages'
- [ ] Determine where we need state
- [ ] Use conditional rendering to determine what to show based on state
- [ ] Use inverse data flow to pass data up

Favorites - filter by favorite albums
- [ ] Click 'Favorites' in side bar to show favorites only

Key Terms:
- **Controlled Form**: When component state controls the values of input fields in a form
- **Inverse Data Flow**: Using a callback function to pass data from a child component to a parent component

### Vanilla JS Forms
In vanilla JS, our typical process for working with forms and getting access to the form data in our application looked something like this:

- Get the form element and listen for a submit event
- Find the form inputs using their name attribute and grab the values
- Use form data to update backend using a fetch
- Update the DOM

### React Controlled Forms
In React, rather than looking into the DOM to get the form's input field values when the form is submitted, we use `state` to monitor the user's input as they type.

- For each input you need:
  1. Some state to manage the input
  2. An onChange listener on the input to monitor user input and update state
  3. A value attribute on the input that corresponds to a key in state
  4. An onSubmit listener on the form to finally submit data

For example, if we have a form component that looks like this:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: ""
  }

  render() {
    return (
      <form>
        <input type="text" name="username">
        <textarea name="comment" />
      </form>
    )
  }
}
```

We could make it a *controlled form* by attaching onChange listeners to each input:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: ""
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value })
  }

  handleCommentChange = event => {
    this.setState({ comment: event.target.value })
  }

  render() {
    return (
      <form>
        <input type="text" name="username" onChange={this.handleUsernameChange} />
        <textarea name="comment" onChange={this.handleCommentChange} />
      </form>
    )
  }
}
```

Doing this creates a 1-way connection wherein user input changes `state`. This is called an *uncontrolled form*. To make it a 2-way street wherein `state` can change the user's input, we add a `value` attribute to our inputs.

```jsx
<form>
  <input type="text" name="username" onChange={this.handleUsernameChange} value={this.state.username} />
  <textarea name="comment" onChange={this.handleCommentChange} value={this.state.comment} />
</form>
```

To keep our code dry, we can also refactor the `handleUsernameChange` and `handlePasswordChange` to a generic `handleChange`. To make this work, make sure the `name` attribute on each input matches its corresponding key in state:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: ""
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
        <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
      </form>
    )
  }
}
```

You could also take advantage of a higher order function to create the onChange handlers:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: ""
  }

  // handleChange is a function that takes in a name argument and returns a new function
  // if we call handleChange("username"), it will return a function where the 'name' variable is set to "username"
  handleChange = name => event => {
    this.setState({ 
      [name]: event.target.value 
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="username" onChange={this.handleChange("username")} value={this.state.username} />
        <textarea name="comment" onChange={this.handleChange("comment")} value={this.state.comment} />
      </form>
    )
  }
}
```

### Inverse Data Flow

When the form actually submits, it's often helpful to pass the state from the form up to a parent component. Imagine we have an app like this:

    CommentContainer
       /       \
CommentForm     CommentCard

When the user submits out the comment form, a new `CommentCard` should be rendered. The `CommentContainer` holds an array of comments in state, so it needs to be updated when a new comment is added. To achieve this, we need to pass down a *callback function* from the `CommentContainer` to the `CommentForm` as a prop:

```js
class CommentContainer extends React.Component {
  state = {
    comments: []
  }

  renderCommentCards() {
    return this.state.comments.map(comment => <CommentCard comment={comment} />)
  }

  // callback for adding a comment to state
  handleCommentSubmit = (comment) => {
    this.setState({ 
      comments: [...this.state.comments, comment ]
    })
  }

  render() {
    return (
      <section>
        {this.renderCommentCards()}
        <hr />
        <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
      </section>
    )
  }
}
```

When the user submits the comment, we can use the `handleCommentSubmit` callback in the `onSubmit` event in the `CommentForm`:

```js
class CommentForm extends React.Component {
  state = {
    username: "",
    comment: ""
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault() // still need this!

    // use the callback to pass state UP to the parent component
    this.props.handleCommentSubmit(this.state)

    // clear the form (reset state)
    this.setState({
      username: "",
      comment: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" onChange={this.handleChange} value={this.state.username} />
        <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
      </form>
    )
  }
}
```


### Advanced State Updates: Arrays
These are some common strategies for updating arrays in state *without* mutating the original array.

#### Adding to an array
- Use the spread operator!

```js
addComment = newComment => {
  // spread to create a new array and add new comment at the end
  const updatedComments = [...this.state.comments, newComment] 

  this.setState({ 
    comments: updatedComments
  })
}
```

#### Removing from an array
- Use filter!

```js
removeComment = commentId => {
  // filter to return a new array with the comment we don't want removed
  const updatedComments = this.state.comments.filter(comment => comment.id !== commentId) 

  this.setState({ 
    comments: updatedComments
  })
}
```

#### Updating an item in an array
- Use map!

```js
updateComment = updatedComment => {
  // filter to return a new array with the comment we don't want removed
  const updatedComments = this.state.comments.map(comment => {
    if (comment.id === updatedComment.id) {
      // if the comment in state is the one we want to update, replace it with the new updated object
      return updatedComment
    } else {
      // otherwise return the original object
      return comment
    }
  }) 

  this.setState({ 
    comments: updatedComments
  })
}
```

If you only want to update one attribute instead of replacing the whole object:
```js

  // updating one object in an array
  handleUpdateCustomer = (id, name) => {
    // use map to return a new array so we aren't mutating state
    const updatedCustomers = this.state.customers.map(customer => {
      // in the array, look for the object we want to update
      if (customer.id === id){ // if we find the object
        const updatedCustomer = { ...customer } // make a copy of it
        updateCustomer.name = name // update whatever attribute have changed
        return updatedCustomer // return the updated copy
      } else { // for all other objects in the array
        return customer // return the original object
      }
    })

    // set state with our updated array
    this.setState({ customers: updatedCustomers })
  }  
```

### Lifting State

[Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)
- Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.
- If two sibling components need access to the same `state`, you will want to place the shared `state` in a parent container. Then you can pass down that `state` as well as any functions that need to modify the state as props to the two sibling components that need to display and/or change that data.

## Extras

React's Diffing Algorithm, and why we need `key` prop on arrays of components:
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)