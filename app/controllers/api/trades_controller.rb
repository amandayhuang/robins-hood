class Api::TradesController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        @trades = @user.trades

        render :index
    end

    def create
        @trade = Trade.new(trade_params)
        if @trade.save
            if @trade.trade_type == 'buy'
                mult = -1
            else
                mult = 1
            end
            BalanceChange.create!(user_id:@trade.user_id, amount:@trade.share_price*@trade.quantity*mult, balanceable: @trade)
            render :show
        else
            render json: @trade.errors.full_messages, status: 401
        end
    end

    private
    def trade_params
        params.require(:trade).permit(:user_id, :ticker_name, :quantity, :trade_type, :share_price)
    end
end