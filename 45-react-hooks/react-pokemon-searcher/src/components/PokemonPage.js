import React from 'react'
import { Header, Dimmer, Loader, Pagination, Container } from 'semantic-ui-react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from '../examples/components/PokemonFormHook'
import Search from './Search'
import { getPagedPokemon } from '../api'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    query: "",
    page: 1,
    totalPages: 0,
    isLoading: false,
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      this.fetchPokemon()
    }
  }

  fetchPokemon() {
    // set isLoading state
    this.setState({ isLoading: true })

    // make request
    getPagedPokemon(this.state.page, this.state.query)
      .then(data => {
        // use response to set state
        const { pokemons, meta: { totalPages } } = data
        this.setState({ pokemons, totalPages, isLoading: false })
      })
  }

  // when the query changes, also reset the page to the beginning
  setQuery = query => this.setState({ query, page: 1 })

  // when the activePage from the <Pagination> component changes
  setPage = (e, { activePage }) => this.setState({ page: activePage })

  render() {
    const { pokemons, isLoading, totalPages, page, query } = this.state

    if (isLoading) return <Dimmer active><Loader /></Dimmer>

    return (
      <Container>
        <Header as="h1">Pokemon Searcher</Header>
        <PokemonForm onFormSubmit={this.setQuery} />
        <br />
        <Search query={query} onSearchSubmit={this.setQuery} key={query} />
        <br />
        <PokemonCollection pokemons={pokemons} />
        <br />
        <Pagination
          activePage={page}
          totalPages={totalPages}
          onPageChange={this.setPage}
        />
      </Container>
    )
  }
}

export default PokemonPage
