class DropFundsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :funds
  end
end
