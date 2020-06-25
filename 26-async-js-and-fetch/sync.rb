require 'rest-client'
require 'json'
require 'pry'

puts "Getting data from the API"

# make a get request and save the response to a variable
response = RestClient.get("https://pokeapi.co/api/v2/pokemon/2")

# sleep(5)

# the response will be in JSON format, we can convert it to a hash
pokemon = JSON.parse(response)

binding.pry

puts "Your pokemon is #{pokemon["name"]}!"