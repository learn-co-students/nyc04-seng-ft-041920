class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      # attributes?
      # title, rating, goals, genre
      t.string :title
      t.integer :rating
      t.string :goals
      t.string :genre
 
      t.timestamps
    end
  end
end
