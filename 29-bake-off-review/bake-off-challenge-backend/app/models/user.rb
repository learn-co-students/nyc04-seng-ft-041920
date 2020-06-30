class User < ApplicationRecord
  has_many :ratings
  has_many :bakes, through: :ratings

  def self.authenticate(auth_header)
    return false unless auth_header
    token = auth_header.split(' ')[1]
    return false unless token
    User.find_by(api_key: token)
  end
end
