# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bakes = [
  {
    "name": "Rahul’s Chocolate-dipped Orange Madeleines",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/05/Choc_Orange_Madalienes_1024x450-1024x450.png",
    "description": "These dainty treats are filled with homemade orange curd. You’ll make more curd than you need, so keep the remainder to have on toast another time."
  },
  {
    "name": "Alice’s Orange & Cardamom ‘Ice Cream’ Buns",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/icecreams_forweb.jpg",
    "description": "Fragrant breads baked to resemble ice-cream tubs are topped with a delicious cream-cheese icing and sprinkles. They are great fun to serve to children."
  },
  {
    "name": "Rosie’s Filled Sablée Pastry Shells",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/10/Sablee_Pastry_Shells_1024x450_3.png",
    "description": "Raspberry and mint crème pâtissière provides the filling for these crumbly pastry shells. The filling is then topped with a dome of lemon bavarois containing a yuzu gelée. Yuzu is a citrus fruit often used in southeast Asian cooking, particularly in China (from where it originates) and Japan. It’s a bit like a lemon, lime and grapefruit all rolled into one. These desserts are fiddly to make, but stunning to serve, so worth the effort."
  },
  {
    "name": "Tamal’s Iced Stollen Wreath",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/05/Tamal_Stollen_1024x450-1024x450.png",
    "description": "The fragrance of the rose water and richness of the pistachio marzipan makes this a truly festive treat. Serve it simply: dusted with icing sugar."
  },
  {
    "name": "Kim-Joy’s Orange Blossom York Biscuits",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/07/York_Biscuits_1024x450_4.png",
    "description": "Crisp and buttery, these biscuits are delicately and deliciously flavoured with orange blossom."
  },
  {
    "name": "Liam’s Salted Peanut Millionaire’s Shortbread",
    "image_url": "https://thegreatbritishbakeoff.co.uk/wp-content/uploads/2019/09/Peanut_Millionaires_1024x450.png",
    "description": "This shortbread base is topped with salted caramel, roasted peanuts and homemade peanut butter, and finished with a layer of tempered dark chocolate."
  }
]

users = [
  {
    username: "p_hollywood",
    api_key: "699a9ff1-88ca-4d77-a26e-e4bc31cfc261"
  },
  {
    username: "maryb",
    api_key: "50dd337d-cb27-466f-9ca3-1ff89ea86645"
  },
  {
    username: "prue",
    api_key: "f2822a59-83e8-4d0b-ba85-5be5eef72e07"
  }
]

User.create(users)

Bake.create(bakes)

puts "Seeding done!"