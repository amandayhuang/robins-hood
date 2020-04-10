class TradesRenameType < ActiveRecord::Migration[5.2]
  def change
    rename_column :trades, :type, :trade_type
  end
end
