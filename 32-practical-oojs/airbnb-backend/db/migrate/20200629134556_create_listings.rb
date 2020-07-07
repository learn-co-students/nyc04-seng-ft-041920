class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.integer :price
      t.integer :likes
      t.string :image_url
      t.belongs_to :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
