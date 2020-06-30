class Bake < ApplicationRecord
  has_many :ratings

  validates :name, presence: true
  validates :image_url, presence: true
  
  def score
    self.ratings.average(:score).to_i || 0
  end

  def self.winner
    bake_id = Rating.group(:bake_id).order('sum_score DESC').sum(:score).first[0]
    Bake.find_by(id: bake_id)
  end
end
