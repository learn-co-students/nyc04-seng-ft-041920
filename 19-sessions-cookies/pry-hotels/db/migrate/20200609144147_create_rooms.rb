class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.integer :number
      t.integer :beds
      t.string :views
      t.string :description
      t.boolean :vacant
      t.belongs_to :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
