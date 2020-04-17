class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        if @user.save
            #initialize an account with $1000 in credit and a few watched stocks
            txn_date = Date.today - 35
            fund = Fund.create(user_id:@user.id, amount:1000.00, fund_type:"in", created_at:txn_date, updated_at:txn_date);
            BalanceChange.create(user_id:fund.user_id, amount:fund.amount, balanceable: fund, created_at:txn_date, updated_at:txn_date)

            Watch.create(user_id:@user.id, ticker_name:Stock.first.ticker_name)
            Watch.create(user_id:@user.id, ticker_name:Stock.second.ticker_name)

            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
            
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end