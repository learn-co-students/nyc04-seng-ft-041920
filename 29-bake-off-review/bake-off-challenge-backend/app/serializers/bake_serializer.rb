class BakeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :score
end
