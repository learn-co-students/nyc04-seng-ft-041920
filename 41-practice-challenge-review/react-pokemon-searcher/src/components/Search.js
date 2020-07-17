import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {

  const handleInputChange = e => {
    setSearchTerm(e.target.value.toLowerCase())
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleInputChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search 
