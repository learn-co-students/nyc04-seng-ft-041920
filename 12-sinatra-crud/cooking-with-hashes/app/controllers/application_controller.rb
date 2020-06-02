require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get '/' do
    erb :pizza
  end

  get '/cheese' do
    erb :cheese
  end

  # TASK 1: Show a list of ALL of the users
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

  # Show the information for one specific user
  get '/users/:id' do
    # model
    @user = User.find(params[:id])
    @emoji = "😻"

    # response
    erb :show
  end

  # create a new user & redirect to the profile for the new user
  post '/users' do
    # model
    user = User.create(params[:user])

    # response
    redirect "/users/#{user.id}"
  end


end
