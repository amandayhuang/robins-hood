# == Schema Information
#
# Table name: funds
#
#  id         :bigint           not null, primary key
#  fund_type  :string           not null
#  amount     :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class Fund < ApplicationRecord
    validates :fund_type, :amount, :user_id, presence:true
    
    belongs_to :user
    has_many :balance_changes, as: :balanceable

end
