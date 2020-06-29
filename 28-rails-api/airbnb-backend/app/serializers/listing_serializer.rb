class ListingSerializer < ActiveModel::Serializer
  attributes :id, :title, :likes, :price, :imageUrl, :locationName
  # belongs_to :location
end
