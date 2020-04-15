@stocks.each do |stock|
  json.set! stock.ticker_name do
    json.partial! 'api/stocks/stock', stock: stock
  end
end