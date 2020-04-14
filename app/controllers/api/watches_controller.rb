class Api::WatchesController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        @watches = @user.watches

        render :index
    end

    def create
        @watch = Watch.new(watch_params)
        if @watch.save
            render :show
        else
            render json: @watch.errors.full_messages, status: 401
        end
    end

    private
    def watch_params
        params.require(:watch).permit(:user_id, :ticker_name)
    end
end