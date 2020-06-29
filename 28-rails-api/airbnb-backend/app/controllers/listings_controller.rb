class ListingsController < ApplicationController

  # GET /listings
  def index
    # get all the listings from the database
    listings = Listing.all

    # render a response
    render json: listings
  end

  # POST /listings
  def create
    # where will we get the form info?
    location = Location.find_or_create_by(name: params[:locationName])
    
    listing = Listing.create(
      title: params[:title],
      image_url: params[:imageUrl],
      price: params[:price],
      likes: params[:likes],
      location: location
    )

    if listing.valid?
      # response?
      render json: listing
    else
      render json: { errors: listing.errors.full_messages }, status: 400
    end
  end

  # DELETE /listings/:id
  def destroy
    listing = Listing.find_by(id: params[:id])
    listing.destroy

    # response
    render json: { message: "Nice, it's gone" }
  end

  # PATCH /listings/:id
  def update
    listing = Listing.find_by(id: params[:id])
    listing.update(likes: params[:likes])

    # response
    render json: { listing: listing, message: "Update likes!" }
  end

  # PATCH /listings/:id/like
  def like
    listing = Listing.find_by(id: params[:id])
    listing.update(likes: listing.likes + 1)

    # response
    render json: listing
  end

end
