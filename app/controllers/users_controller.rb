class UsersController < ApplicationController
  load_and_authorize_resource except: :create

  def new; end

  def create
    user = User.create(user_params)
    status = user.errors.any? ? :bad_request : :ok
    payload = { status: status, error_message: user.errors.full_messages.to_sentence }

    render json: payload
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
      format.json { render json: @users.to_json }
    end
  end

  def update; end

  def destroy
    User.find_by(id: params[:id])&.delete
    render json: { head: :ok }
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation, :role)
  end
end
