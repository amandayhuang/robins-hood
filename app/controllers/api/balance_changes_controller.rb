class Api::BalanceChangesController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        @balance_changes = @user.balance_changes

        render :index
    end
end