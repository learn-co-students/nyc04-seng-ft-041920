require 'pry'
require 'rest-client'
require 'json'




# make a request
# https://www.googleapis.com/books/v1/volumes?q=old+man+and+the+sea



# response = RestClient.get('https://www.googleapis.com/books/v1/volumes?q=old+man+and+the+sea')
# binding.pry
# play around with the data we get back 

def welcome
    puts "Welcome to the Books finder! Please enter the type of books you'd like to see!"
end

def get_user_input
    gets.chomp
end

def get_books(query)
    response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{query}")
    JSON.parse(response)
end

def run
    welcome
    user_input = get_user_input
    books = get_books(user_input)
    binding.pry
end

run