# == Schema Information
#
# Table name: trades
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  ticker_name :string           not null
#  trade_type  :string           not null
#  quantity    :integer          not null
#  share_price :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Trade < ApplicationRecord
    validates :trade_type, :quantity, :share_price, :ticker_name, presence:true

    belongs_to :stock,
        primary_key: :ticker_name,
        foreign_key: :ticker_name,
        class_name: :Stock
    belongs_to :user

end
