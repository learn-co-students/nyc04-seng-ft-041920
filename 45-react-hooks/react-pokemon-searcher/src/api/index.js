const baseUrl = "http://localhost:3000"

export const getPagedPokemon = (page, query) => {
  return fetch(`${baseUrl}/pokemons?page=${page}&query=${query}`)
    .then(r => r.json())
}

export const createPokemon = bodyData => {
  return fetch(`${baseUrl}/pokemons`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bodyData)
  })
    .then(response => {
      return response.json().then(data => {
        if (response.ok) {
          return data
        } else {
          throw data
        }
      })
    })
}