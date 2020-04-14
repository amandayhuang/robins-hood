# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_14_202828) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "balance_changes", force: :cascade do |t|
    t.float "amount", null: false
    t.string "balanceable_type"
    t.bigint "balanceable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id", null: false
    t.index ["balanceable_type", "balanceable_id"], name: "index_balance_changes_on_balanceable_type_and_balanceable_id"
  end

  create_table "funds", force: :cascade do |t|
    t.string "fund_type", null: false
    t.float "amount", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_funds_on_user_id"
  end

  create_table "stocks", force: :cascade do |t|
    t.string "display_name", null: false
    t.string "ticker_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticker_name"], name: "index_stocks_on_ticker_name"
  end

  create_table "trades", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "ticker_name", null: false
    t.string "trade_type", null: false
    t.integer "quantity", null: false
    t.float "share_price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticker_name"], name: "index_trades_on_ticker_name"
    t.index ["user_id"], name: "index_trades_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
  end

  create_table "watches", force: :cascade do |t|
    t.string "ticker_name", null: false
    t.integer "user_id", null: false
    t.boolean "is_deleted", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ticker_name"], name: "index_watches_on_ticker_name"
    t.index ["user_id"], name: "index_watches_on_user_id"
  end

end
