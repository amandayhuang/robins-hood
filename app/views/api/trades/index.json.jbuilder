@trades.each do |trade|
  json.set! trade.id do
    json.extract! trade, :id, :user_id, :stock_id, :trade_type, :quantity, :share_price, :created_at
  end
end