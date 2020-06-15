class SessionsController < ApplicationController
    def reset_counter
        session[:counter] = 3
        redirect_back(fallback_location: hotels_path)
    end
end