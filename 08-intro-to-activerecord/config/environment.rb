require 'bundler/setup'
# requires all our gems in the Gemfile into our project
Bundler.require

# database.yml configures our database connection
# you might also see it like this in the labs:
# ActiveRecord::Base.establish_connection(
#   adapter: 'sqlite3',
#   database: "db/development.sqlite"
# )

# enables logging in console whenever ActiveRecord writes SQL for us
ActiveRecord::Base.logger = Logger.new(STDOUT)

# require all files in our app directory
require_all 'app'
