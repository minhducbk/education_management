class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # CanCan - pass params in to Ability
  def current_ability
    if current_user.is_a? User
      @current_ability ||= Abilities::Ability.new(current_user)
    end
  end

  protected
end
