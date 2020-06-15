Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/hotels', to: "hotels#index", as: "hotels"
  # get '/hotels/:id', to: "hotels#show", as: "hotel"
  # get '/hotels/new', to: "hotels#new", as: "new_hotel"
  # post '/hotels', to: "hotels#create"
  # get '/puppies/trainers/blahblahs/something', to: "puppies#some_action", as: "blahblah"
  
  resources :rooms, only: [:create, :new] 
  resources :hotels, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  patch "/sessions/reset", to: "sessions#reset_counter"
end
