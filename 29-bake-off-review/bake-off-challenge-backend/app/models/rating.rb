class Rating < ApplicationRecord
  belongs_to :user
  belongs_to :bake

  validates :score, inclusion: { in: "0".."10" }
  validates :user, uniqueness: { scope: :bake }

end
