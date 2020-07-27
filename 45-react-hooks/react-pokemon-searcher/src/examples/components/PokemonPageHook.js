import React, { useState } from 'react'
import { Header, Dimmer, Loader, Pagination, Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonFormHook'
import Search from './Search'
import { useFetch } from '../hooks/useFetch'
import { getPagedPokemon } from '../api'

const PokemonPage = () => {
  const [{ query, page }, setQuery] = useState({ query: "", page: 1 })

  const cacheKey = `${page}:${query}`
  const { data, isLoading } = useFetch(cacheKey, () => getPagedPokemon(page, query))

  // when the query changes, also reset the page to the beginning
  const handleSetQuery = query => setQuery({ query, page: 1 })

  // when the activePage from the <Pagination> component changes
  const handleSetPage = (e, { activePage }) => setQuery({ query, page: activePage })

  if (isLoading) return <Dimmer active><Loader /></Dimmer>

  return (
    <Container>
      <Header as="h1">Pokemon Searcher</Header>
      <PokemonForm onFormSubmit={handleSetQuery} />
      <br />
      <Search query={query} onSearchSubmit={handleSetQuery} key={query} />
      <br />
      <PokemonCollection pokemons={data.pokemons} />
      <br />
      <Pagination
        activePage={page}
        totalPages={data.meta.totalPages}
        onPageChange={handleSetPage}
      />
    </Container>
  )
}

export default PokemonPage
