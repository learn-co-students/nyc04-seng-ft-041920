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
    
    def edit
        @hotel = Hotel.find(params[:id])
        render :edit
    end

    def update
        byebug
        hotel = Hotel.find(params[:id])
        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities)
        hotel.update(hotel_params)

        redirect_to hotel_path(hotel)
    end

    def create
        # byebug
        # hotel_params = params.require(:hotel).permit!
        # The above line will allow us to do mass assignment, but it will not give 
        # us the added security that we would get writing it as the line below
        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities, :location)
        hotel = Hotel.create(hotel_params)
        redirect_to hotel_path(hotel)
    end

    def destroy
        # find the model
        hotel = Hotel.find(params[:id])
        # destroy it
        hotel.destroy
        # redirect
        redirect_to hotels_path
    end

end
