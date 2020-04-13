class Api::TradesController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        @trades = @user.trades

        render :index
    end

    def create
        @trade = Trade.new(trade_params)
        if @trade.save
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