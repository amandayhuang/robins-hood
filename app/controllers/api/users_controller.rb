class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            login!(@user)
            # render :show
            render json: @user
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end