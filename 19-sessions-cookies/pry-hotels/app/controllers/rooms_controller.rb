class RoomsController < ApplicationController
    # get '/rooms/new'
    def new
        @room = Room.new
        render :new
    end

    # post '/rooms'
    def create
        # byebug
        # room_params = params.require(:room).permit(:number,:views,:description,:vacant,:beds,:hotel_id)
        room = Room.create(room_params)
        redirect_to hotel_path(room.hotel_id)
    end

    private
    def room_params
        params.require(:room).permit(:number,:views,:description,:vacant,:beds,:hotel_id)
    end
end
