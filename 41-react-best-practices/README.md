React Best Practices
===

## SWBAT

- [ ] Write cleaner React code

## Questions/Concerns?


## More Features?
- [ ] Search
- [ ] Show favorites

## Objectives

- Opinions
  - [ ] Code Organization/file structure 
  - [ ] Presentational vs Container components

- Optimizations:
  - [ ] Functional vs Class Components 
  - [ ] Fragments

- Best Practices:
  - [ ] "then" callback for setState
  - [ ] Callbacks (avoid useless wrapping)
  - [ ] Functional setState

- JS tricks/bugs often seen in React:
  - [ ] Arrow functions returning objects () => ({ })
  - [ ] Destructuring  ====> let { likes, name } = this.props
  - [ ] Spread (w/ prepend and append) this.setState({ messages: [...this.state.messages, 'newmessage']})
  - [ ] Objects with the same key/value name ===> let myPerson = {firstName, lastName}
  - [ ] constructor vs. ES7 instance variables ===> ie state = {}
  - [ ] dynamic keys ==>  { [variable]: "as_key" } 

- Topics for later... look ahead on your own if you're curious
    - [ ] Hooks 
    - [ ] HOCs (maybe)

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[HOCs](https://reactjs.org/docs/higher-order-components.html)
[Hooks](https://reactjs.org/docs/hooks-intro.html)