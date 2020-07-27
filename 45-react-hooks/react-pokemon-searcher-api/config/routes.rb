Rails.application.routes.draw do
  resources :pokemons, only: [:index, :create]
end
