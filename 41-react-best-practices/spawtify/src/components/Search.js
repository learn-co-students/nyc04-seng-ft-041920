import React from 'react'

const Search = (props) => {

  return (
    <form className="search">
      <input type="text" name="search" placeholder="Search..." autoComplete="off" />
      <input type="submit" value="🔍" />
    </form>
  )
}

export default Search