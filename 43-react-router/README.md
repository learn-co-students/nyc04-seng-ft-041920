React Router
============

## SWBAT

- [ ] Create a "multi-page" SPA
- [ ] Explain the advantages of using React Router
- [ ] Utilize the most common `react-router` components to build a SPA: `BrowserRouter`, `Route`, `Switch`, `Link`, and `NavLink`
- [ ] Create dynamic routes and use `params`
- [ ] Use `push` and `history` to navigate pages
- [ ] Make the distinction between `state` being one _Single Source of Truth_ and `react-router` being another _Single Source of Truth_
- [ ] **Bonus** Use the `withRouter` HOC to wrap give child components access to the state of the router
- [ ] **Bonus** Use hooks like `useHistory` to access the state of the router

## Routes
- [ ] "/albums"     - Albums index (**bonus** use query params for search)
- [ ] "/albums/:id" - Albums show
- [ ] "/albums/new" - Create new album
- [ ] "/favorites"  - Favorite albums
- [ ] "/login"      - Login page

## Lecture Notes

## SPAs

- Benefits: 
- don't have to think about routes (pro + con)
- faster - don't have to wait for that full page refresh
- load all the data upfront, so faster

- Challenges 
- initial load can be slow
- rendering logic can be tedious
- async is hard! loading state, error states
- miss that custom url
- back button... navigating between pages






### Server-side Vs Client-side Routing

- Client-side == no more request response.
- This results in a much faster/smoother feeling website.

**Why do we even need routes?**

- The user can use forward/back to navigate your app
- The user can navigate via urls
- We can make urls describe the action that the user might be taking
- Users can bookmark urls

**What are the drawbacks to client-side routing?**

- We're loading all of our frontend at once, so it might add to the initial load time
- We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### HTML5 History API

At a low level, React Router takes advantage of the fact that we can programatically interact with the browser's url with the History API.

You can manipulate the URL in your browser with these:

```javascript
window.history.pushState({}, null, 'page');
window.history.back();
window.history.forward();
```

Combine that with `if/else` logic and tracking history and you get `react-router`.

### React Router API

First, install it! `npm install react-router-dom --save`

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.
> [_source: React Router Philosophy_](https://reactrouter.com/web/guides/philosophy)

### Creating a Router

To set up our application to use a router, we wrap our ENTIRE application in a Router component: 

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
```

React Router is essentially a [Context Provider](https://reactjs.org/docs/context.html) that gives your other components access to the history object so you have access to additional information to perform routing logic. 

Note that there are several kinds of routers:

- **BrowserRouter**: gives nicest looking URLs, but can be trickier to deploy (check your host's documentation on client side routing to see how to configure it if you need this style of URL).
- **HashRouter**: all urls start with a # at the beginning. Easier to configure for deploying, but has some limitations. 

IMO, it's worth the extra effort to get BrowserRouter working!

### Creating Routes

Once your Router component is set up, you can create separate routes that will each be responsible for showing separate components. If we want to use the following routes in our application:

- "/" - HomePage component
- "/about" - AboutPage component

In the code below, we're relying on two components from React Router to set up these different routes:

- Switch: Looks through all its child Route components and returns the first one that matches the current URL (like a `switch` statement in JavaScript)
- Route: Uses a prop of *path* to compare with the current URL; if the path matches the url, it will render a component based on its *component* or *render* prop
  - Use `exact` prop if you only want exact matches!

```js
// App.js
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import UserPage from './UserPage'
import NavBar from './NavBar'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar /> {/* NavBar will be displayed on all routes */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/users/:name" component={UserPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    )
  }
}
```

The `component` prop of the route takes in a class or functional component definition, and will automatically pass additional props to it from the router (such as url and params). If you need to pass additional information to a component as props, use the `render` prop:

```js
class App extends React.Component {
  this.state = {
    something: "useful"
  }

  render() {
    return (
      <div className="App">
        <NavBar /> {/* NavBar will be displayed on all routes */}
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/users/:name" component={UserPage} />
          <Route exact path="/" render={routeProps => <HomePage {...routeProps} something={this.state.something} />} />
        </Switch>
      </div>
    )
  }
}
```

To access route info in a child component of Route, simply look at its props:

```js
class UserPage extends React.Component {

  render() {
    return (
      <h1>{this.props.match.params.name}</h1>
    )
  }
}
```

### Making Links

Since we're implementing client side routing, we can't rely on just making regular `<a>` tags to navigate between our pages; if we use an anchor tag, it will trigger a refresh of our application and we'll lose our application state!

Instead, we need to use the `Link` component from React Router to keep all of our navigation between pages handled within Javascript.

```js
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div class="NavBar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default NavBar
```


## Resources

- [HTML5 History API MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [React Router Github](https://github.com/ReactTraining/react-router)
- [React Router Website](https://reactrouter.com/web/)




