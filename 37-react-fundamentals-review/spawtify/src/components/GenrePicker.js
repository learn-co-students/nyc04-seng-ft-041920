import React from 'react'

const GenrePicker = (props) => {

  return (
    <div className="genre-picker">
      <span onClick={() => props.handleSelectedGenre("All")} className={props.selectedGenre === "All" ? "active" : ""}>All</span>
      <span onClick={() => props.handleSelectedGenre("Cats")} className={props.selectedGenre === "Cats" ? "active" : ""}>Cats</span>
      <span onClick={() => props.handleSelectedGenre("Dogs")} className={props.selectedGenre === "Dogs" ? "active" : ""}>Dogs</span>
      <span onClick={() => props.handleSelectedGenre("Birds")} className={props.selectedGenre === "Birds" ? "active" : ""}>Birds</span>
      <span onClick={() => props.handleSelectedGenre("Snakes")} className={props.selectedGenre === "Snakes" ? "active" : ""}>Snakes</span>
      <span onClick={() => props.handleSelectedGenre("Goats")} className={props.selectedGenre === "Goats" ? "active" : ""}>Goats</span>
    </div>
  )
}

export default GenrePicker