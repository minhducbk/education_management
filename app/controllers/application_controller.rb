class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # CanCan - pass params in to Ability
  def current_ability
    if current_user.is_a? User
      @current_ability ||= Abilities::Ability.new(current_user, params)
    end
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) { |u| u.permit(:role, :email, :password, :password_confirmation) }
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:email, :password) }
  end
end
