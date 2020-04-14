class BalanceChangeUser < ActiveRecord::Migration[5.2]
  def change
    add_column :balance_changes, :user_id, :integer, null:false
  end
end
