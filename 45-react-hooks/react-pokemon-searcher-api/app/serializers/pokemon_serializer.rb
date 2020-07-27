class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :hp
  has_one :sprite, key: :sprites
end
