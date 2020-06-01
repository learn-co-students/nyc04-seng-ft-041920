class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.integer :age
      t.string :faveFood
      t.boolean :allergies
    end
  end
end
