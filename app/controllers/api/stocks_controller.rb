class Api::StocksController < ApplicationController
    
    def index

    end

    def show
        @stock = Stock.find_by(ticker_name:params[:id])
        # debugger
        if @stock
            # render :template => "/api/stocks/show"
            render :show
        else
            render json: ['Stock not found.'], status: 404
        end
    end
end