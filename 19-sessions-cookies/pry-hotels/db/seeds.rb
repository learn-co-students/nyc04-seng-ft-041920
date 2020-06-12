# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# t.integer :number
#       t.integer :beds
#       t.string :views
#       t.string :description
#       t.boolean :vacant
#       t.belongs_to :hotel, null: false, foreign_key: true
puts "Destroying rooms...."
Room.destroy_all

puts "Creating Rooms...."
Room.create([
    {
        number: 55,
        beds: 2,
        description: "lofty room",
        views: "highway views",
        vacant: true,
        hotel_id: Hotel.first.id
    },
    {
        number: 777,
        beds: 4,
        description: "Not a murder site",
        views: "cemetary",
        vacant: true,
        hotel_id: Hotel.first.id
    },
    {
        number: 401,
        beds: 27,
        description: "there may or may not be someone inside",
        views: "beach",
        vacant: false,
        hotel_id: Hotel.first.id
    }
])

puts "Room creation successful!! 🏫"