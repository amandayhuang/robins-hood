# == Schema Information
#
# Table name: watches
#
#  id          :bigint           not null, primary key
#  ticker_name :string           not null
#  user_id     :integer          not null
#  is_deleted  :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Watch < ApplicationRecord
    validates :ticker_name, :user_id, presence:true

    belongs_to :user
    
    belongs_to :stock,
    primary_key: :ticker_name,
    foreign_key: :ticker_name,
    class_name: :Stock
end
