class RatingsController < ApplicationController
  before_action :authorized, only: :create
  
  def create
    rating = @user.ratings.find_by(bake_id: params[:bake_id])

    if rating
      rating.update(score: params[:score])
    else
      rating = @user.ratings.create(rating_params)
    end

    if rating.valid?
      render json: rating.bake
    else
      render json: { errors: rating.errors.full_messages }, status: 400
    end
  end

  private

  def rating_params
    params.permit(:bake_id, :score)
  end

end