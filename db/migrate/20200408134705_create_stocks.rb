class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :display_name, null:false
      t.string :ticker_name, null:false, unique:true
      t.timestamps
    end

    add_index :stocks, :ticker_name
  end
end
