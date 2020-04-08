# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Stock.destroy_all

User.create!(email:"demo@robinhood.com", first_name:"Robin", last_name:"Hood", password:"demopassword")

Stock.create!(display_name:"Amanda Bynes", ticker_name:"AB")
Stock.create!(display_name:"Yoko Ono", ticker_name:"ONO")
Stock.create!(display_name:"Selena Quintanilla", ticker_name:"SELQ")
Stock.create!(display_name:"Joe Exotic", ticker_name:"JX")
Stock.create!(display_name:"Ali Wong", ticker_name:"WONG")
Stock.create!(display_name:"Beyonce", ticker_name:"BEY")
Stock.create!(display_name:"Alexandria Ocasio-Cortez", ticker_name:"AOC")
Stock.create!(display_name:"Ta-Nehisi Coates", ticker_name:"TNC")
Stock.create!(display_name:"Grace Hopper", ticker_name:"HOPP")
Stock.create!(display_name:"Andrew Cuomo", ticker_name:"CUO")