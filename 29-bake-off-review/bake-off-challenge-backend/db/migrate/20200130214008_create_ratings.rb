class CreateRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :ratings do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :bake, null: false, foreign_key: true
      t.string :score

      t.timestamps
    end
  end
end
