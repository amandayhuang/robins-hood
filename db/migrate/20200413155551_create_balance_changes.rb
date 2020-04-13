class CreateBalanceChanges < ActiveRecord::Migration[5.2]
  def change
    create_table :balance_changes do |t|
      t.float :amount, null:false
      t.references :balanceable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
