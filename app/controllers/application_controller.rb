class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  # after_action :set_csrf_cookie_for_ng

  # protect_from_forgery with: :exception
  protect_from_forgery with: :null_session

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  # CanCan - pass params in to Ability
  def current_ability
    if current_user && (current_user.is_a? User)
      @current_ability ||= Abilities::Ability.new(current_user)
    else
      render json: {}, status: :bad_request
    end
  end

  protected

  def verified_request?
    p 'session ', session
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

  def configure_permitted_parameters
    added_attrs = %i[username email password password_confirmation remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
end
