require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
  end

  get '/' do
    erb :pizza
  end

  get '/cheese' do
    erb :cheese
  end
  
  # Show a list of ALL of the users
  get '/users' do
    # model
    @users = User.all
    @monkey = "🐵"

    # response
    erb :index
  end

  # Show a form to create a new user
  get '/users/new' do
    # response
    erb :new
  end

  # Show a page with the information for ONE specific user
  get '/users/:id' do
    # model
    @user = User.find(params[:id])
    @emoji = "😻"

    # response
    erb :show
  end

  # Create a new user & redirect to the profile for the new user
  post '/users' do
    # model
    user = User.create(params[:user])

    # response
    redirect "/users/#{user.id}"
  end

  # Show a form to edit ONE specific user
  get '/users/:id/edit' do
    # find the user
    @user = User.find(params[:id])

    erb :edit
  end

  # Edit an existing user & redirect to the profile for the new user 
  put '/users/:id' do
    # find the user
    user = User.find(params[:id])

    # update the user
    user.update(params[:user])

    # response
    redirect "/users/#{user.id}"
  end

  # Delete an existing user
  delete '/users/:id' do
    # find the user 
    user = User.find(params[:id])

    # delete them
    user.destroy

    # response
    redirect "/users"
  end
end