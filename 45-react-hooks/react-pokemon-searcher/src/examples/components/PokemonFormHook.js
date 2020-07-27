import React, { useState, useEffect } from 'react'
import { Form, Message } from 'semantic-ui-react'
import { createPokemon } from '../../api'
import { useMutation } from '../hooks/useMutation'

const PokemonForm = ({ onFormSubmit }) => {
  console.log("PokemonForm render")

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    front_sprite: "",
    back_sprite: ""
  })

  const [runFetch, { isLoading, isError, data, error }] = useMutation(() => createPokemon(formData))

  useEffect(() => {
    if (data && data.pokemon) {
      onFormSubmit(data.pokemon.name)
    }
  }, [data, onFormSubmit])

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => runFetch()

  return (
    <Form onSubmit={handleSubmit} error={isError} loading={isLoading}>
      <h3>Add a Pokemon!</h3>
      <Form.Group widths="equal">
        <Form.Input fluid label="Name" name="name" value={formData.name} onChange={handleInputChange} />
        <Form.Input fluid label="hp" name="hp" value={formData.hp} onChange={handleInputChange} />
        <Form.Input fluid label="Front Image URL" name="front_sprite" value={formData.front_sprite} onChange={handleInputChange} />
        <Form.Input fluid label="Back Image URL" name="back_sprite" value={formData.back_sprite} onChange={handleInputChange} />
      </Form.Group>
      {isError && (
        <Message error>
          <h4>Error Creating Pokemon</h4>
          {error.errors.map(error => <p key={error}>{error}</p>)}
        </Message>
      )}
      <Form.Button>Submit</Form.Button>
    </Form>
  )
}

export default PokemonForm
