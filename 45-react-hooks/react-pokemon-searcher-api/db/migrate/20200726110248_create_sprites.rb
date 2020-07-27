class CreateSprites < ActiveRecord::Migration[6.0]
  def change
    create_table :sprites do |t|
      t.string :front
      t.string :back
      t.belongs_to :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
