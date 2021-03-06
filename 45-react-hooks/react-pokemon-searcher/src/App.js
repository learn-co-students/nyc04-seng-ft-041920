import React from 'react'
import PokemonPage from './components/PokemonPageHook'
import './App.css'
import Examples from './examples/components/Examples'

const App = () => {

  return (
    <div className="App">
      <Examples />
      <PokemonPage />
    </div>
  )
}

export default App
