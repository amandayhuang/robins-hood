@trades.each do |trade|
  json.set! trade.id do
    json.partial! 'api/trades/trade', trade: trade
  end
end