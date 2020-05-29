require 'pry'
require 'rest-client'
require 'json'


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

    get_books(user_input)["items"].each do |item|
       puts item["volumeInfo"]["title"]
    end
end

run