class Pokemon < ApplicationRecord
  has_one :sprite, dependent: :destroy

  validates :name, presence: true, uniqueness: { case_sensitive: false }
  validates :hp, presence: true

  def self.paged(page: 1, limit: 15, query: "")
    offset = (page - 1) * limit

    pokemon = all.includes(:sprite)
    pokemon = pokemon.where("name LIKE ?", "%#{query}%") if query != ""
    pokemon.limit(limit).offset(offset)
  end

end
