React Best Practices
===

## Questions/Concerns?

- Pure Components - when to use, what it is
- Reusable Components - how to structure a component so it can be reused

```js

// AlbumContainer
<Button handleClick={() => setState({ like: this.state.likes + 1 })} displayText={this.state.currentAlbum.title} />

// NavBar
<Button handleClick={() => setState({ newPage: "home" })} displayText="Home" />

// generic! (single responsibility) - it doesn't know about the logic in other components
const Button = (props) => {
  return <button onClick={props.handleClick}>{props.displayText}</button>
}
```

## Objectives

### Opinions
- [ ] Code Organization/file structure 
- [ ] Presentational vs Container components

### Optimizations
- [ ] Functional (no state) vs Class Components (state, lifecycle)
- [ ] Fragments
- [ ] PureComponent / shouldComponentUpdate (both can only be used in class components)

### Best Practices
- [ ] Callbacks (avoid useless wrapping)
- [ ] Functional setState (and setState 2nd argument)
 
### JS tricks/bugs often seen in React:
- [ ] Arrow functions returning objects () => ({ })

- [ ] Destructuring  ====> let { likes, name } = this.props

- [x] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})

```js
addAlbum = newAlbum => {
  // this.state.albums.push(newAlbum) // no, mutates state
  this.setState({
    albums: [...this.state.album, newAlbum] 
  })
}
```

- [x] Objects with the same key/value name ===> let myPerson = {firstName, lastName}

```js
let name = "rei"
let favGame = "Overwatch"

let rei = {
  name: name,
  favGame: favGame
}

let rei = {
  name,
  favGame
}

getAlbums = albums => {
  // this.setState({
  //   albums: albums
  // })
  this.setState({ albums })
}

```

- [x] constructor vs. ES7 instance variables ===> ie state = {}

- [ ] dynamic keys ==>  { [variable]: "as_key" } 

- [x] higher order functions (example: onChange handler)


### Topics for later... look ahead on your own if you're curious
- [ ] Old(er) - Higher Order Components
- [ ] New! - Hooks (week 3!)
- [ ] The Future - Concurrent Mode & Suspense

## More Features?
- [ ] Search
- [ ] Show favorites

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[HOCs](https://reactjs.org/docs/higher-order-components.html)
[Hooks](https://reactjs.org/docs/hooks-intro.html)