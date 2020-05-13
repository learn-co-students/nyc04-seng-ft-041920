require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

user1 = User.new("coffee_dad", "just a coffee lovin' dad")
user2 = User.new("coffee_mom", "just a coffee lovin' mom")
user3 = User.new("coffee_dad", "hey")

t1 = Tweet.new("loving #the coffee", user1)
t2 = Tweet.new("life is life", user1)
t3 = Tweet.new("having some java", user1)
t4 = Tweet.new("what is coffee", user1)
Tweet.new("coffeee", user2)
Tweet.new("coffeee yay", user2)
Tweet.new("coffeee today", user2)






binding.pry