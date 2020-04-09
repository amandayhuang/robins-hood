# == Schema Information
#
# Table name: trades
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  stock_id    :integer          not null
#  trade_type  :string           not null
#  quantity    :integer          not null
#  share_price :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Trade < ApplicationRecord
    validates :trade_type, :quantity, :share_price, presence:true

    belongs_to :stock
    belongs_to :user

end
