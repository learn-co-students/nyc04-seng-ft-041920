Intro to React
===

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

## Outline
- [ ] Discuss [three key featutes of React](https://reactjs.org/)
- [ ] Break a website down into components
- [ ] Setup a minimal React app and discuss some tooling needed to run our code (Babel)
- [ ] Create components using JSX and render them on the DOM
- [ ] Decide on an app to build together!

## Notes



### Imperitive vs Declarative in Code

Imperitive:
```js
const header = document.createElement("h1")
header.textContent = "Hi!"
header.className = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

Declarative
```js
addHeader({ text: "Wassup", className: "", parentElement: container })
```

### Babel

[Babel](https://babeljs.io/) is a tool for **transpiling** JavaScript code - it lets us write JavaScript code in any version we want (so we can use the latest and greatest features of the language), and it converts our code into a version of JavaScript that will run on any browsers we want. For any React project we're making, we need to use Babel in order to write JSX (JavaScript XML) markup in our code. Babel lets us write code that looks like this:

```jsx
ReactDOM.render(
  <h1>Isn't Babel neat?</h1>,
  document.getElementById('root')
)
```

And turn it into this:

```js
ReactDOM.render(
  React.createElement("h1", null, "Isn't Babel neat?"), 
  document.getElementById('root')
)
```

`create-react-app` uses Babel under the hood, so we don't have to worry about doing much of our own Babel configuration, but it is a key piece of the puzzle in terms of the modern JavaScript ecosystem.

### JSX

In vanilla Javascript, there were several steps involved to adding DOM elements to the page:

```js
function renderCard() {
  // 1. create each individual DOM element
  const cardDiv = document.createElement('div')
  // 2. assign any attributes we want on that element
  cardDiv.className = "card"
  cardDiv.id = "card1"
  cardDiv.textContent = "hi"
  // 3. append that card to some parent element in the DOM
  parentElement.append(cardDiv)
}
```

JSX is an _abstraction_ that makes it easier to write code _declaratively_ representing DOM elements, and lets React do the heavy lifting of turning our JSX into actual DOM elements. Instead of us _imperitively_ telling the browser exactly how to create the DOM element, we use JSX to describe what our element should look like.

```jsx
ReactDOM.render(
  // 1. tell React how we want our element to look
  <div id="card1" className="card"> 
    hi
  </div>,
  // 2. append our components to the DOM
  document.getElementById('root') 
)
```

We can also make our JSX work with dynamic values by using {} to evaluate our JS code as an expression:

```jsx
const greeting = "hello!"

ReactDOM.render(
  <div id="card1" className="card"> 
    {greeting}
  </div>,
  document.getElementById('root') 
)
```


```jsx
ReactDOM.render(
  <div id="card1" className="card"> 
    {greeting}
  </div>,
  document.getElementById('root') 
)
```

### Components

React's philosophy encourages developers to break down the DOM into independent, reusable pieces called _Components_. At a minimum, a Component in React is any function that returns valid JSX:

```js
function Card() {
  return (
    <div id="card1" className="card"> 
      hi
    </div>
  )
}

ReactDOM.render(
  <Card />,
  document.getElementById('root') 
)
```

When you're defining components, here are some things to keep in mind:

- A component can only return _one element_. It's ok for that element to have children, like this:

```js
function Card() {
  return (
    <div id="card1" className="card"> 
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  )
}
```

But it's not ok for the component to return multiple elements, like this:

```js
function Card() {
  return (    
    <h1>hi</h1>
    <p>wassup?</p>
  )
}
```

- Also, the name of your components must be capitalized. This will not work: 

```js
function card() {
  return (
    <div id="card1" className="card"> 
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  )
}

ReactDOM.render(
  <card />,
  document.getElementById('root') 
)
```

React treats any JSX elements that are capitalized as Components, and any JSX elements that aren't capitalized as regular DOM elements. So with the example above, you'd end up with something like this:

```html
<div id="root">
  <card>
</div>
```

...instead of this:

```html
<div id="root">
  <div id="card1" className="card"> 
    <h1>hi</h1>
    <p>wassup?</p>
  </div>
</div>
```

### Props

When you create components, one way to make them dynamic and reusable is by passing in _props_. For example, if we wanted to create several cards on our page using the `Card` component, we could do so like this:

```js

function Card(props) {
  return (
    <div id="card1" className="card"> 
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  <div>,
  document.getElementById('root') 
)
```

The _props_ argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

One additional note on JSX syntax and props: if you need to define attributes on a component that aren't strings, you have to wrap those values in {}:

```js
ReactDOM.render(
  <div>
    <Card greeting="hi" number={7} boolean={false} callback={() => console.log("call me!")} object={{ key: "value" }} />
  <div>,
  document.getElementById('root') 
)
```

## Resources

[React](https://reactjs.org/)
[Babel](https://babeljs.io/)
