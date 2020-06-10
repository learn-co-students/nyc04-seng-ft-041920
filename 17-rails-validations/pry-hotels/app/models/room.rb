class Room < ApplicationRecord
  belongs_to :hotel

  # Task 1: a specific room number should only exist once for a specific hotel 
  # (hotels should not have duplicate room numbers)

  # Task 2: write a custom method - there must be between 1 and 4 beds


end
