class ApplicationController < ActionController::Base

    private
    def set_counter
        # if session[:counter] == nil
        #     session[:counter] = 3
        # end

        session[:counter] ||= 3
    end
end
