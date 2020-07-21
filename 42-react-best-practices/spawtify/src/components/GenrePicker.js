import React from 'react'

const GenrePicker = ({ handleSelectedGenre, selectedGenre }) => {

  return (
    <div className="genre-picker">
      <span onClick={() => handleSelectedGenre("All")} className={selectedGenre === "All" ? "active" : ""}>All</span>
      <span onClick={() => handleSelectedGenre("Cats")} className={selectedGenre === "Cats" ? "active" : ""}>Cats</span>
      <span onClick={() => handleSelectedGenre("Dogs")} className={selectedGenre === "Dogs" ? "active" : ""}>Dogs</span>
      <span onClick={() => handleSelectedGenre("Birds")} className={selectedGenre === "Birds" ? "active" : ""}>Birds</span>
      <span onClick={() => handleSelectedGenre("Snakes")} className={selectedGenre === "Snakes" ? "active" : ""}>Snakes</span>
      <span onClick={() => handleSelectedGenre("Goats")} className={selectedGenre === "Goats" ? "active" : ""}>Goats</span>
    </div>
  )
}

export default GenrePicker