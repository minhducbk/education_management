class UsersController < ApplicationController
  load_and_authorize_resource except: :create

  def new; end

  def create
    user = User.create(user_params)
    if user.errors.any?
      payload = { errors: user.errors.errors.map(&:full_message).join }
      status = :bad_request
    else
      p 'User create!'
      payload = {
        status: 200
      }
      status = :ok
    end
    render json: payload, status: status
  end

  def show
    p '7777777777777'
  end

  def edit
    p 'edit 5555555'
    @user = User.find_by(id: params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
  end

  def index
    @users = User.accessible_by(current_ability)
    respond_to do |format|
      format.html
      format.json { render json: @users }
    end
  end

  def update; end

  def destroy
    User.find_by(id: params[:id])&.delete
    respond_to do |format|
      format.html
      format.json { render head :ok }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation, :role)
  end
end
