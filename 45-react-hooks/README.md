# React Hooks 

## SWBATS
- [ ] Understand the purpose of React Hooks 
- [ ] Identify which types of components hooks work with and make comparisons to tools of React that we have already learned
- [ ] Understand the syntax of useState() and how it is the equivalent of `state` and `setState`
- [ ] Understand the syntax of useEffect() and how it can be used in place of lifecycle methods(componentDidMount/componentDidUpdate)
- [ ] Convert Class Components to Functional Components using Hooks

-----

## What are React Hooks? 🤔

React hooks are functions that let us "hook" into React state and lifecycle features from function components. Hooks allow us to to manipulate the state of functional components without needing to convert into class components. We also can use them to acheive similar effects as common lifecycle methods in function components.

## Why React Hooks? 🤨
- Cleaner and less code with functional components opposed to class components 
- Classes can be confusing with the concept of `this`. (Can be resolved through `bind` or arrow functions)
- Functional components can potentially have a better performance than Class 

## Rules of Hooks
Hooks are Javascript functions, but they have two important rules:
- Don't call them inside of loops, conditions, or nested functions. Only call them at the TOP LEVEL.
- Don't call hooks from regular Javascript functions, only call them from React function components (or from custom hooks)

-----

## Importing and Implementing useState 
Import useState from React by:

```js
import React, { useState } from 'react'
```

`useState` is a function that when invoked with an initial state, **returns an array** of a stateful value and a function to update it.

Destructuring the array is the standard when working with useState.

```js
    const [state, setState] = useState(initialState)
```

**Example Time**: Let's say we have a hook that manages state for what city we're in. 

```js
const [getMyCity, setMyCity] = useState('New York City!')
```

Now that we have called useState and destructured its return value we have access to both getting our state and setting it as shown below. 

```js
console.log(getMyCity) // => 'New York City!'

setMyCity('ATL') // => sets our state to 'ATL'
```

**Note:** `useState` does not have to be passed a string. The initial state can be set to an integer, boolean, string, object, etc.

----- 

## Importing and Implementing useEffect 

In a class component, there are several lifecycle methods that fire at different points in a component's life. Functional components don't have access to these without hooks, and the implementation is pretty different.

Whereas a class component has access to `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, and a few others, a functional component only has access to the `useEffect` hook. This single powerful function can do everything that a lifecycle can do but it takes a little getting used to. It will also handle behaviors you would've managed in lifecycle methods, such as API calls.

Before we can utilize our new hook, we first need to import it:

```js
import React, { useState, useEffect } from 'react'
```

Now that we have the hook, let's use it.

It takes two parameters, a callback function and an array, and it returns nothing. The callback function it takes will be executed **after every** render cycle. Think of it as a combination of `componentDidMount` and `componentDidUpdate`. This can be an issue as it can lead to an infinite loop unless handled correctly.

```js
useEffect( () => console.log(getMyCity) )
```

There is an effective solution for that. The useEffect hook takes a second argument, which controls if the function should be executed. If we pass in a dependency array of variables as the second argument, our useEffect hook will only fire when those variables change:

```js
useEffect( () => console.log(getMyCity), [getMyCity] )
```

Now our hook will only fire when the component wants to update and notices that our `getMyCity` is different. If it updates for any other reason it'll skip this hook.

And what if we want our hook to only fire on the initial render, similar to `componentDidMount`? In that case, pass in an empty array:

```js
useEffect( () => console.log('Your component has mounted'), [] )
```

A note on the array: if you use anything declared in your component outside of the `useEffect` hook it generally has to be added to the dependency array. Read more about it at the bottom of this page: https://reactjs.org/docs/hooks-effect.html

----

## Cleaning Up *Side* Effects
One final bit of functionality for the `useEffect` hook is that we occasionally want to clean up the side effects we create with it. Imagine we created something like `setInterval` and needed to remove it when the component unmounts. The way we clean it up is by returning a function in our callback function that clears the timeout:

```js
useEffect(() => {

  const myInterval = setInterval(() => console.log('Hey!'), 1000 )

  return function cleanup() {
    clearInterval(myInterval)
  }

  // The function can be anonymous, it's named here for clarity

})
```

Technically, the cleanup happens every time before our `useEffect` runs again, which means it will reset the interval on every update. If we wanted to make it only fire on specific instances, we could pass in an array as a second argument to make the effect only happen (and therefore cleanup) in specific instances:

```js
useEffect(() => {

  const myInterval = setInterval(() => console.log('Hey!'), 1000 )

  return function cleanup() {
    clearInterval(myInterval)
  }

}, [])
```


## External Resources (Blogs and Documentation)
- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [Why React Hooks? A Developer's Perspective](https://hackernoon.com/why-react-hooks-a-developers-perspective-2aedb8511f38)
- [React Hooks: useState(using the state hook)](https://hackernoon.com/react-hooks-usestate-using-the-state-hook-89ec55b84f8c)
- [React Hooks: useState and useEffect](https://levelup.gitconnected.com/react-hooks-usestate-and-useeffect-2d0b870c654f)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Data Fetching with Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)

### Contributors
- Written by @cmccarthy15, stolen by @ihollander, appreciation to @reireynoso and @brewchetta
