class UsersController < ApplicationController
  load_and_authorize_resource except: :create
  
  def create
  end

  def show
    p "7777777777777"
    binding.pry
  end

  def index
    binding.pry
    users
  end

  def update
  end

  def delete
  end
end
