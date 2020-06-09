class Hotel < ApplicationRecord
    has_many :rooms, dependent: :destroy
end
