class Sprite < ApplicationRecord
  belongs_to :pokemon

  validates :front, presence: true
  validates :back, presence: true
  
end
