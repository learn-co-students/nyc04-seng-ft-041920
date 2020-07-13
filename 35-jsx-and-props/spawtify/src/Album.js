import React, { Component } from 'react'

// Class Component
// use component state -> information that changes over time
// lifecycle methods
class Album extends Component {

  // instance method called render
  render() {
    console.log(this.props)
    const { image, name, genre } = this.props
    // must return JSX
    return (
      <div>
        <img src={image} alt={name} width={200} height={200} />
        <h1>{name}</h1>
        <em>{genre}</em>
      </div>
    )
  }
}

// Function Component -> takes in props, returns JSX
// Hooks - week 3...
// const Album = (props) => {
//   const { image, name, genre } = props
//   return (
//     <div>
//       <img src={image} alt={name} width={200} height={200} />
//       <h1>{name}</h1>
//       <em>{genre}</em>
//     </div>
//   )
// }

export default Album