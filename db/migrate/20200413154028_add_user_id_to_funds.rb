class AddUserIdToFunds < ActiveRecord::Migration[5.2]
  def change
    add_column :funds, :user_id, :integer
    add_index :funds, :user_id
  end
end
