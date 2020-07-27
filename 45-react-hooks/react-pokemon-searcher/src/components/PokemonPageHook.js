import React, { useState, useEffect } from 'react'
import { Header, Dimmer, Loader, Pagination, Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { getPagedPokemon } from '../api'
import { useUrlSpinner } from '../examples/hooks/useUrlSpinner'


// useEffect arg: 
// 1st: callback to run when the component "renders"
// 2nd: dependencies array
// no 2nd arg - run every time our component "renders"
// 2nd arg [] - only run the first time our component "renders" (like componentDidMount)
// 2nd arg [page] - run this effect any time 'page' changes

const PokemonPage = () => {

  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const [pokemonInfo, setPokemonInfo] = useState({
    pokemons: [],
    totalPages: 0,
    isLoading: true
  })
  const { pokemons, totalPages, isLoading } = pokemonInfo

  useUrlSpinner(isLoading)

  useEffect(() => {
    // set isLoading state
    // setPokemonInfo({ ...pokemonInfo, isLoading: true })

    // setState callback version
    setPokemonInfo(prevState => {
      return {
        ...prevState,
        isLoading: true
      }
    })

    // make request
    getPagedPokemon(page, query)
      .then(data => {
        // use response to set state
        const { pokemons, meta: { totalPages } } = data

        // this.setState({ pokemons, totalPages, isLoading: false })
        // setPokemons(pokemons)
        // setTotalPages(totalPages)
        // setIsLoading(false)
        setPokemonInfo({
          pokemons: pokemons,
          totalPages: totalPages,
          isLoading: false
        })
      })
  }, [page, query])

  // // when the query changes, also reset the page to the beginning
  const handleSetQuery = query => {
    setQuery(query)
    setPage(1)
  }

  // // when the activePage from the <Pagination> component changes
  const handleSetPage = (e, { activePage }) => setPage(activePage)

  if (isLoading) return <Dimmer active><Loader /></Dimmer>

  return (
    <Container>
      <Header as="h1">Pokemon Searcher</Header>
      <PokemonForm onFormSubmit={handleSetQuery} />
      <br />
      <Search query={query} onSearchSubmit={handleSetQuery} key={query} />
      <br />
      <PokemonCollection pokemons={pokemons} />
      <br />
      <Pagination
        activePage={page}
        totalPages={totalPages}
        onPageChange={handleSetPage}
      />
    </Container>
  )
  // }
}

export default PokemonPage
