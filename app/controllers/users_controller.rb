class UsersController < ApplicationController
  load_and_authorize_resource except: :create
  
  def create
  end

  def show
    p "7777777777777"
  end

  def edit
    p "edit 5555555"
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

  def update
  end

  def delete
    binding.pry
    User.find_by(id: params[:id]).&destroy!
  end
end
