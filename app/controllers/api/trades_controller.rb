class Api::TradesController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        @trades = @user.trades

        render :index
        # render json: @trades
    end

    def create
        # debugger
        @trade = Trade.new(trade_params)
        @trade.user_id = params[:user_id]
        if @trade.save
            # render :show
            render json: @trade
        else
            render json: @trade.errors.full_messages, status: 401
            
        end
    end

    private
    def trade_params
        params.require(:trade).permit(:stock_id, :quantity,:trade_type,:share_price)
    end
end