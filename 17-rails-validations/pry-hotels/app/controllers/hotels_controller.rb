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
        # byebug
        @errors = flash[:errors]
        @hotel = Hotel.new
        render :new
    end
    
    # post "/hotels" 
    def create
        # hotel_params = params.require(:hotel).permit!
        # The line above will allow us to do mass assignment, but it will not give 
        # us the added security that we would get writing it as the line below

        hotel_params = params.require(:hotel).permit(:name, :rating, :dining, :amenities, :location)
        @hotel = Hotel.create(hotel_params)

        # if hotel is valid, redirect to hotel_path
        if @hotel.valid?
            redirect_to hotel_path(@hotel)
        else
        # if hotel is not valid, display errors & redirect to form
            # byebug
            flash[:errors] = @hotel.errors.full_messages
            redirect_to new_hotel_path
        end
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


    # delete "/hotels/:id"
    def destroy
        hotel = Hotel.find(params[:id])
        # hotel.rooms.destroy_all
        hotel.destroy

        redirect_to hotels_path
    end
end
