class UsersController < ApplicationController

    def index
        @users = User.all
        # explicit rendering
        render :index
    end
    
    def show
        @user = User.find(params[:id])
        # explicit rendering
        render :show
    end
end