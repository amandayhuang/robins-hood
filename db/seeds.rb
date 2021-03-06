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
BalanceChange.destroy_all
Watch.destroy_all

txn_date = Date.today - 35
demo = User.create!(email:"demo@robinhood.com", first_name:"Robin", last_name:"Hood", password:"demopassword", created_at:txn_date, updated_at:txn_date)
fund = Fund.create!(user_id:demo.id, amount:1000.00, fund_type:"in", created_at:txn_date, updated_at:txn_date);
BalanceChange.create!(user_id:fund.user_id, amount:fund.amount, balanceable: fund, created_at:txn_date, updated_at:txn_date)

andrew = Stock.create!(display_name:"Andrew Cuomo", ticker_name:"CUO")
beyonce = Stock.create!(display_name:"Beyonce", ticker_name:"BEY")
amanda = Stock.create!(display_name:"Amanda Bynes", ticker_name:"AB")
yoko = Stock.create!(display_name:"Yoko Ono", ticker_name:"ONO")
selena = Stock.create!(display_name:"Selena Quintanilla", ticker_name:"SELQ")
joe = Stock.create!(display_name:"Joe Exotic", ticker_name:"JX")
lebron = Stock.create!(display_name:"LeBron James", ticker_name:"LBJ")
ali = Stock.create!(display_name:"Ali Wong", ticker_name:"WONG")
alexandria = Stock.create!(display_name:"Alexandria Ocasio-Cortez", ticker_name:"AOC")
grace = Stock.create!(display_name:"Grace Hopper", ticker_name:"HOPP")
mindy = Stock.create!(display_name:"Mindy Kaling", ticker_name:"MK")
claire = Stock.create!(display_name:"Claire Saffitz", ticker_name:"SAF")
rupaul = Stock.create!(display_name:"RuPaul", ticker_name:"RUP")
ruth = Stock.create!(display_name:"Ruth Bader Ginsburg", ticker_name:"RBG")
dolly = Stock.create!(display_name:"Dolly Parton", ticker_name:"DOLL")
timothee = Stock.create!(display_name:"Timothee Chalamet", ticker_name:"TIM")
liz = Stock.create!(display_name:"Elizabeth Holmes", ticker_name:"SCAM")
anna = Stock.create!(display_name:"Anna Delvey", ticker_name:"SORO")



require 'date'
trade_date = Date.today - 10
trade_1 = Trade.create!(user_id:demo.id, ticker_name:andrew.ticker_name, trade_type:'buy', quantity:4, share_price:10.50, created_at:trade_date, updated_at:trade_date)
BalanceChange.create!(user_id:trade_1.user_id, amount:trade_1.share_price*trade_1.quantity*-1, balanceable: trade_1, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 6
trade_2 = Trade.create!(user_id:demo.id, ticker_name:beyonce.ticker_name, trade_type:'buy', quantity:10, share_price:12.50, created_at:trade_date, updated_at:trade_date)
BalanceChange.create!(user_id:trade_2.user_id, amount:trade_2.share_price*trade_2.quantity*-1, balanceable: trade_2, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 5
trade_3 = Trade.create!(user_id:demo.id, ticker_name:yoko.ticker_name, trade_type:'buy', quantity:2, share_price:38.88, created_at:trade_date, updated_at:trade_date)
BalanceChange.create!(user_id:trade_3.user_id, amount:trade_3.share_price*trade_3.quantity*-1, balanceable: trade_3, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 3
trade_4 = Trade.create!(user_id:demo.id, ticker_name:yoko.ticker_name, trade_type:'sell', quantity:1, share_price:15.50, created_at:trade_date, updated_at:trade_date)
BalanceChange.create!(user_id:trade_4.user_id, amount:trade_4.share_price*trade_4.quantity, balanceable: trade_4, created_at:trade_date, updated_at:trade_date)

trade_date = Date.today - 1
trade_5 = Trade.create!(user_id:demo.id, ticker_name:beyonce.ticker_name, trade_type:'buy', quantity:1, share_price:89.21, created_at:trade_date, updated_at:trade_date)
BalanceChange.create!(user_id:trade_5.user_id, amount:trade_5.share_price*trade_5.quantity*-1, balanceable: trade_5, created_at:trade_date, updated_at:trade_date)

#make this trade now
trade_6 = Trade.create!(user_id:demo.id, ticker_name:beyonce.ticker_name, trade_type:'sell', quantity:5, share_price:100.01)
BalanceChange.create!(user_id:trade_6.user_id, amount:trade_6.share_price*trade_6.quantity, balanceable: trade_6)

watch_1 = Watch.create!(user_id:demo.id, ticker_name:amanda.ticker_name)
watch_2 = Watch.create!(user_id:demo.id, ticker_name:alexandria.ticker_name)