class Listing < ApplicationRecord
  belongs_to :location

  validates :title, presence: true

  def imageUrl
    self.image_url
  end

  def locationName
    self.location.name
  end

end
