Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/bakes/winner", to: "bakes#winner"
  resources :bakes, only: [:index, :show, :create] do
    resources :ratings, only: :create
  end
end
