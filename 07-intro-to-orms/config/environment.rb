require 'bundler'
# this will require all the gems in our Gemfile
# require 'sqlite3'
# require 'pry'
Bundler.require

# set up our database connection, save to a constant so we can access throughout the application
DB = {
  conn: SQLite3::Database.new('db/game-reviews.db')
}

# configure the database to return results as a hash instead of an array
DB[:conn].results_as_hash = true

# require our model file(s)
require_relative '../app/models/game'
