class CreateHotels < ActiveRecord::Migration[6.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :amenities
      t.string :location
      t.integer :rating
      t.string :dining

      t.timestamps
    end
  end
end
