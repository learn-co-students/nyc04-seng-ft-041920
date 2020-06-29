Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :listings, only: [:index, :create, :destroy]
  patch "/listings/:id/like", to: "listings#like"
  # get "/listings", to: "listings#index"
  # post "/listings", to: "listings#create"
  # delete "/listings/:id", to: "listings#destroy"
  # patch "/listings/:id", to: "listings#update"
end
