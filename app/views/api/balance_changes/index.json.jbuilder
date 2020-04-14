@balance_changes.each do |bc|
  json.set! bc.id do
    json.partial! 'api/balance_changes/balance_change', balance_change: bc
  end
end