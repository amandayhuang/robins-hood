class CreateFunds2 < ActiveRecord::Migration[5.2]
  def change
    create_table :funds do |t|
      t.string :fund_type, null:false
      t.float :amount, null:false
      t.timestamps
    end
  end
end

