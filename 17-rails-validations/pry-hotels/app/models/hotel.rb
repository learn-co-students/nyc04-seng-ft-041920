class Hotel < ApplicationRecord
    has_many :rooms, dependent: :destroy


    # Task 1: hotel name must not be nil

    # Task 2: Rating must be no greater than 5
end
