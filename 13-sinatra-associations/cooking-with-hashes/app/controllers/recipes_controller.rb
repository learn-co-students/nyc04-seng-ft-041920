class RecipesController < ApplicationController

    get '/recipes/new' do
        @users = User.all
        erb :"recipes/new"
    end
    
    post '/recipes' do
        # create a new recipe
        recipe = Recipe.create(params[:recipe])

        # response
        redirect :"/users/#{recipe.user_id}"
    end 
end