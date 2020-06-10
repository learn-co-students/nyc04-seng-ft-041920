class HotelsController < ApplicationController
    
    # get "/hotels"
    def index
        @hotels = Hotel.all
        render :index
    end

    # get "/hotels/:id"
    def show
        @hotel = Hotel.find(params[:id])
        render :show
    end

    # get "/hotels/new"
    def new
        @hotel = Hotel.new
        render :new
    end
    
    # get "/hotels/:id/edit"
    def edit
        @hotel = Hotel.find(params[:id])
        render :edit
    end

    # patch "/hotels/:id" 
    def update
        hotel = Hotel.find(params[:id])
        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities)
        hotel.update(hotel_params)

        redirect_to hotel_path(hotel)
    end

    # post "/hotels" 
    def create
        # hotel_params = params.require(:hotel).permit!
        # The line above will allow us to do mass assignment, but it will not give 
        # us the added security that we would get writing it as the line below

        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities, :location)
        hotel = Hotel.create(hotel_params)

        redirect_to hotel_path(hotel)
    end

    # delete "/hotels/:id"
    def destroy
        hotel = Hotel.find(params[:id])
        # hotel.rooms.destroy_all
        hotel.destroy

        redirect_to hotels_path
    end

end
