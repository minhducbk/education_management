# frozen_string_literal: true

class SessionsController < Devise::SessionsController
  skip_before_action :require_no_authentication, only: [:new]
  before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  def new
    p "888888888888888"
    super
  end

  
  def create
    p "999999999999999999"
    self.resource = warden.authenticate!(auth_options)

    if resource.is_a? Teacher
      set_flash_message(:notice, :signed_in) if is_flashing_format?
      sign_in(resource_name, resource)
      resource.user_sessions.create!
      yield resource if block_given?
      binding.pry
      redirect_to users_path
    else
      warden.logout(:user)
      flash[:alert] = 'Access Denied.'
      redirect_to new_user_session_path
    end
  end

 

  # DELETE /resource/sign_out
  def destroy
    super
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:role, :email, :password, :password_confirmation) }
  end
end
