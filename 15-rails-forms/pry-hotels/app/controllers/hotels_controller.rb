class HotelsController < ApplicationController
    
    def index
        @hotels = Hotel.all
        render :index
    end

    def show
        @hotel = Hotel.find(params[:id])
        render :show
    end

    def new
        @hotel = Hotel.new
        render :new
    end

    def create
        byebug
        # hotel_params = params.require(:hotel).permit!
        # The above line will allow us to do mass assignment, but it will not give 
        # us the added security that we would get writing it as the line below
        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities, :location)
        hotel = Hotel.create(hotel_params)
        redirect_to hotel_path(hotel)
    end
end
