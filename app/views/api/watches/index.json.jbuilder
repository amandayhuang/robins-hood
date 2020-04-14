@watches.each do |watch|
  json.set! watch.id do
    json.partial! 'api/watches/watch', watch: watch
  end
end