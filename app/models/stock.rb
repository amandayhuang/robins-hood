class Stock < ApplicationRecord
    validates :display_name, presence:true
    validates :ticker_name, presence:true, uniqueness:true
end