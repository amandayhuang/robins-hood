# == Schema Information
#
# Table name: balance_changes
#
#  id               :bigint           not null, primary key
#  amount           :float            not null
#  balanceable_type :string
#  balanceable_id   :bigint
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :integer          not null
#
class BalanceChange < ApplicationRecord
    validates :amount, presence:true

    belongs_to :balanceable, polymorphic: true 
    belongs_to :user

end
