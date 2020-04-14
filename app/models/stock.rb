# == Schema Information
#
# Table name: stocks
#
#  id           :bigint           not null, primary key
#  display_name :string           not null
#  ticker_name  :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Stock < ApplicationRecord
    validates :display_name, presence:true
    validates :ticker_name, presence:true, uniqueness:true

    has_many :trades,
    primary_key: :ticker_name,
    foreign_key: :ticker_name,
    class_name: :Trade

    has_many :watches,
    primary_key: :ticker_name,
    foreign_key: :ticker_name,
    class_name: :Watch
end
