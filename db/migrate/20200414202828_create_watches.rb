class CreateWatches < ActiveRecord::Migration[5.2]
  def change
    create_table :watches do |t|
      t.string :ticker_name, null:false
      t.integer :user_id, null:false
      t.boolean :is_deleted, null:false, default:false
      t.timestamps
    end

    add_index :watches, :ticker_name
    add_index :watches, :user_id
  end
end
