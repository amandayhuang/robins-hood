class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['Invalid email or password'], status: 401
    else
      login!(@user)
      render :template => "api/users/show"
    end
  end

  def destroy
    logout!
    render json: { message: 'Logged out!' }
  end
end