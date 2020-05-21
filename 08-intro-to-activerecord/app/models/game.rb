class Game < ActiveRecord::Base

  # Create
  # Game.new -> create a new ruby instance
  # Game#save -> insert into the database
  # Game.create -> new + save together

  # Read
  # Game.all -> get all instances from the database as ruby obj 
  # Game.first/last -> get the first/last instance
  # Game.find(id) -> get the instance with that id
  # Game.find_by(hash) -> get the first instance that matches the column and value
  # Game.where(hash) -> get all the instances that match the column and value

  # Update
  # Game#save -> updates the instance in the database if it has an id
  # Game#update(hash) -> updates all column in the has for that instance
  # Game.update(hash) -> update all the instances

  # Delete
  # Game#destroy -> delete the instance from the database
  # Game.destroy_all -> delete all the rows from the database

  def custom_method
    ""
  end
end

# module ActiveRecord
  # class Base
  #   def initialize
  #   end
  # end
# end