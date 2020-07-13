JSX and Props
===

## SWBATs
- [ ] Understand how `create-react-app` works and what it offers a developer
- [ ] Organize code into files and use the import-export syntax to pass ddata between components
- [ ] Use props to make components more dynamic and reusable
- [ ] Setup a new React app and play around with building UIs
- [ ] **BONUS/HOMEWORK** Use the `children` prop 

## Outline
- [ ] Review project wireframe/component hierarchy
- [ ] Use `npx create-react-app <app>` to scaffold our app
- [ ] Walk through app structure (package.json, public, src) and discuss import/export syntax
- [ ] Build out our component hierarchy based on Thinking In React
- [ ] Discuss the difference between class-based and functional components

### `create-react-app`
There are many tools for easily building React applications such as Create React App, Gatsby, and Next; each of these solutions packages together React with several other tools for making our lives as developers easier. The [React Docs](https://reactjs.org/docs/create-a-new-react-app.html) go into some more detail on what each of these tools is best suited for. For Flatiron projects, we're going to be using Create React App. In addition to React, it gives us:

- Webpack: a tool for bundling and minifying our code (along with a server for running our code in development)
- Babel: a transpiler that lets us write modern JavaScript and JSX

Think of `create-react-app` like `rails new`: it will build a project folder for our application and install all the dependencies we need (via Node Package Manager).

To create a new React application and start it, run:

```sh
npx create-react-app app-name
cd app-name
npm start
```

### Import/Export syntax

In React, it's recommended that we write each of our components in its own file to help keep our code organized. In order to work with code written across multiple files, we can use the `import` and `export` syntax that was introduced to Javascript as part of ES6. We also can use this syntax to import code from external libraries. Starting at the index.js file (entry), Webpack will use our imports and exports to bundle together the final code that is sent to the browser.

For example, if our application looks like this:

```
├── src/
│   ├── app.js
│   └── index.js
├── utils/
│   └── math.js
```

We can create and export an App component in `src/app.js`:

```js
import React from 'react' // default import

function App() {
  return <h1>Hello!</h1>
}

export default App // default export
```

And import it in our `src/index.js` file like this:

```js
import React from 'react'
import ReactDOM from 'react-dom'
// there is a convention to import external dependencies first (at the top of your file), and internal dependencies last
import App from './app' // default import, using the relative path to our app.js file

ReactDOM.render(<App />, document.querySelector("#root"))
```

In addition to default imports/exports, you can also do named imports/exports. Typically, classes and React components are exported as the default export, and smaller utility/helper functions are exported as named exports.

For example, if we have some utility functions in `utils/math.js`:

```js
const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 - num2

export { add, subtract } // named export
```

We can use them in our `src/app.js` file like this:

```js
import React from 'react' // default import
import { add, subtract } from '../utils/math' // named import

function App() {
  return <h1>Hello!</h1>
}

export default App // default export
```

### Class Components
In React, there are two types of components: Function Components and Class Components. Function Components can be declared using the function keyword or as arrow functions; the requirement for a Function Component is that it returns valid JSX:

```js
function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>{props.bio}</h1>
    </div>
  )
}
```

We can also use ES6 classes to define components:

```js
class Card extends React.Component {

  render() {
    return (
      <div className="card">
        <h1>{this.props.name}</h1>
        <p>{this.props.bio}</h1>
      </div>
    )
  }
}
```

For now, the primary difference between Class and Function Components is that for Class Components, we must:

1. Define a `render` method that returns valid JSX, and
2. Use `this.props` to access props

In upcoming lectures, we'll see some of the other differences between Class and Function Components.

### Component Refactoring

When you're creating components, there comes a time to evaluate your code and ask if there is anything that would make sense to be extracted to a separate component. In the example below, we've got several elements (cards) being generated based on some sample data. The cards are a good candidate for refactoring - they are reusable pieces of UI that we may want to add additional functionality to in the future. With this starter code:

```js
import React from 'react'

// sample data
const dogs = [
  { id: 1, name: "Fezzik", favSnack: "peanut butter" },
  { id: 2, name: "Ruby", favSnack: "turkey" },
  { id: 3, name: "Spinny", favSnack: "spinach" },
]

// app component
class App {
  
  // helper method
  renderCards() {
    const cards = dogs.map(dog => {
      return (
        <div className="card">
          <h1>{dog.name}</h1>
          <p>{dog.favSnack}</h1>
        </div>
      )
    })

    return cards // return an array of JSX
  }

  render() {
    return (
      <div className="cards">
        {this.renderCards()}
      </div>
    )
  }
}
```

We could refactor to something like this:

```js
// card.js
import React from 'react'

class Card {
  render() {
    <div className="card">
      <h1>{this.props.name}</h1>
      <p>{this.props.favSnack}</h1>
    </div>
  }
}

export default Card

// app.js
import React from 'react'
import Card from './card'

class App {
  
  // helper method
  renderCards() {
    const cards = dogs.map(dog => {
      return (
        <Card 
          key={dog.id} 
          name={dog.name} 
          favSnack={dog.favSnack} 
        />
      )
    })

    return cards // return an array of JSX
  }

  render() {
    return (
      <div className="cards">
        {this.renderCards()}
      </div>
    )
  }
}
```


### Resources
[Creating React Apps](https://reactjs.org/docs/create-a-new-react-app.html)
[create-react-app](https://create-react-app.dev/docs/getting-started)
[Webpack](https://webpack.js.org/)
[Quick intro to Webpack](https://medium.com/the-self-taught-programmer/what-is-webpack-and-why-should-i-care-part-1-introduction-ca4da7d0d8dc)