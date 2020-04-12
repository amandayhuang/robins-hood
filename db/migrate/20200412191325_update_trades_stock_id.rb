class UpdateTradesStockId < ActiveRecord::Migration[5.2]
  def change
    rename_column :trades, :stock_id, :ticker_name
    change_column :trades, :ticker_name, :string
  end
end
