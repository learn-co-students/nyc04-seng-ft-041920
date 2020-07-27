import React from 'react'
import { Form, Message } from 'semantic-ui-react'
import { createPokemon } from '../api'

class PokemonForm extends React.Component {
  state = {
    formData: {
      name: "",
      hp: "",
      front_sprite: "",
      back_sprite: ""
    },
    isLoading: false,
    isError: false,
    errors: []
  }

  handleInputChange = e => {
    const { name, value } = e.target
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    // reset loading/error states
    this.setState({ isLoading: true, isError: false, errors: [] })

    // call helper to run fetch POST 
    createPokemon(this.state.formData)
      .then(data => {
        // success!
        const { pokemon } = data
        this.props.onFormSubmit(pokemon.name)

        this.setState({ isLoading: false })
      })
      .catch(data => {
        // error!
        const { errors } = data

        this.setState({ errors, isLoading: false, isError: true })
      })
  }

  render() {
    const { formData, errors, isLoading, isError } = this.state

    return (
      <Form onSubmit={this.handleSubmit} error={isError} loading={isLoading}>
        <h3>Add a Pokemon!</h3>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" name="name" value={formData.name} onChange={this.handleInputChange} />
          <Form.Input fluid label="hp" name="hp" value={formData.hp} onChange={this.handleInputChange} />
          <Form.Input fluid label="Front Image URL" name="front_sprite" value={formData.front_sprite} onChange={this.handleInputChange} />
          <Form.Input fluid label="Back Image URL" name="back_sprite" value={formData.back_sprite} onChange={this.handleInputChange} />
        </Form.Group>
        {isError && (
          <Message error>
            <h4>Error Creating Pokemon</h4>
            {errors.map(error => <p key={error}>{error}</p>)}
          </Message>
        )}
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default PokemonForm
