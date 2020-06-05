Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/users', to: "users#index", as: "users"
  get '/users/:id', to: "users#show", as: "user"


end
