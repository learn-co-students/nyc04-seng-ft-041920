class PokemonsController < ApplicationController
  before_action :slow_down

  def index
    # parse params
    page = (params[:page] || 1).to_i
    limit = (params[:limit] || 18).to_i
    query = params[:query] || ""

    # get paged data
    pokemons = Pokemon.paged(page: page, limit: limit, query: query)
    total_pages = (Pokemon.count / limit.to_f).ceil
    
    # send paged data + metadata
    render json: pokemons, meta: { total_pages: total_pages }
  end

  def create
    pokemon = Pokemon.create(name: params[:name], hp: params[:hp])

    unless pokemon.valid?
      return render json: { errors: pokemon.errors.full_messages }, status: :bad_request
    end

    sprite = Sprite.create(front: params[:front_sprite], back: params[:back_sprite], pokemon: pokemon)

    unless sprite.valid?
      return render json: { errors: sprite.errors.full_messages }, status: :bad_request
    end

    render json: pokemon, status: :created
  end

  private

  def slow_down
    sleep(1)
  end

end
