class Hotel < ApplicationRecord
    has_many :rooms, dependent: :destroy


    # Task 1: hotel name must not be nil
    validates :name, presence: true

    # Task 2: Rating must be between 1 and 5
    # validates :rating, numericality: {
    #     greater_than_or_equal_to: 1,
    #     less_than_or_equal_to: 5
    # }
    validates :rating, inclusion: {in: 1..5, message: "must be between 1 and 5"}


    # name cannot have symbols, only alphabetic letters

    # location can only have letters and numbers
end
