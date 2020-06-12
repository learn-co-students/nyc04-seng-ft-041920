class Room < ApplicationRecord
  belongs_to :hotel

  # Task 1: a specific room number should only exist once for a specific hotel 
  # (hotels should not have duplicate room numbers)
  validates :number, uniqueness: {
    scope: :hotel_id,
    message: "already exists in this hotel"
  }

  # Task 2: write a custom method - there must be between 1 and 3 beds
  validate :must_exist_one_to_three_beds


  def must_exist_one_to_three_beds
    # byebug
    if self.beds > 3 || self.beds < 1
      self.errors.add(:beds, "must be between 1 and 3")
    end
  end


  # there must be 1 - 3 beds

  # the description cannot be more than 50 words

  # room cannot be nil, there must be a room number for a room to exist


end
