# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :first_name, :last_name, :password_digest, :session_token, presence:true
    validates :email, uniqueness:true
    validates :password, length:{minimum:10}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :trades
    has_many :funds
    has_many :balance_changes
    has_many :watches

    has_many :owned_stocks, -> { distinct }, through: :trades,
    source: :stock

    has_many :watched_stocks, -> { distinct }, through: :watches,
    source: :stock

    def self.find_by_credentials(email,password)
        user = User.find_by(email:email)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        token = User.generate_session_token
        self.session_token = token
        self.save!
        token
    end

    def is_password?(password)
        bc_pass = BCrypt::Password.new(self.password_digest)
        bc_pass.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end



end
