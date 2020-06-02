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
    erb :users
  end

end
