class Zipcodes < ActiveRecord::Migration
  def change
    create_table :zip_codes do |t|
      t.string :zip
      t.float :lat
      t.float :long
      t.string :building
      t.float :kwh
      t.timestamps
    end
  end
end
