# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Stock.destroy_all
Trade.destroy_all
Fund.destroy_all

demo = User.create!(email:"demo@robinhood.com", first_name:"Robin", last_name:"Hood", password:"demopassword")
fund = Fund.create!(user_id:demo.id, amount:1000.00, fund_type:"in");
bc1 = BalanceChange.create!(user_id:fund.user_id, amount:fund.amount, balanceable: fund)

amanda = Stock.create!(display_name:"Amanda Bynes", ticker_name:"AB")
yoko = Stock.create!(display_name:"Yoko Ono", ticker_name:"ONO")
selena = Stock.create!(display_name:"Selena Quintanilla", ticker_name:"SELQ")
joe = Stock.create!(display_name:"Joe Exotic", ticker_name:"JX")
ali = Stock.create!(display_name:"Ali Wong", ticker_name:"WONG")
beyonce = Stock.create!(display_name:"Beyonce", ticker_name:"BEY")
alexandria = Stock.create!(display_name:"Alexandria Ocasio-Cortez", ticker_name:"AOC")
lebron = Stock.create!(display_name:"LeBron James", ticker_name:"LBJ")
grace = Stock.create!(display_name:"Grace Hopper", ticker_name:"HOPP")
andrew = Stock.create!(display_name:"Andrew Cuomo", ticker_name:"CUO")
mindy = Stock.create!(display_name:"Mindy Kaling", ticker_name:"MK")
claire = Stock.create!(display_name:"Claire Saffitz", ticker_name:"SAF")

require 'date'
trade_date = Date.today - 30
trade_1 = Trade.create!(user_id:demo.id, ticker_name:amanda.ticker_name, trade_type:'buy', quantity:4, share_price:12.50, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 25
trade_2 = Trade.create!(user_id:demo.id, ticker_name:yoko.ticker_name, trade_type:'buy', quantity:2, share_price:14.99, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 20
trade_3 = Trade.create!(user_id:demo.id, ticker_name:joe.ticker_name, trade_type:'buy', quantity:1, share_price:108.88, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 15
trade_4 = Trade.create!(user_id:demo.id, ticker_name:yoko.ticker_name, trade_type:'sell', quantity:1, share_price:18.50, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 10
trade_5 = Trade.create!(user_id:demo.id, ticker_name:beyonce.ticker_name, trade_type:'buy', quantity:1, share_price:199.21, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 1
trade_6 = Trade.create!(user_id:demo.id, ticker_name:amanda.ticker_name, trade_type:'sell', quantity:2, share_price:300.33, created_at:trade_date, updated_at:trade_date)