class CreateBakes < ActiveRecord::Migration[6.0]
  def change
    create_table :bakes do |t|
      t.string :name
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
