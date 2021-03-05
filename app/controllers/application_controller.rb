class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :set_csrf_cookie_for_ng

  protect_from_forgery with: :exception

  def set_csrf_cookie_for_ng
    cookies["XSRF-TOKEN"] = form_authenticity_token if protect_against_forgery?
  end


  # CanCan - pass params in to Ability
  def current_ability
    if current_user && (current_user.is_a? User)
      @current_ability ||= Abilities::Ability.new(current_user)
    else
      binding.pry
      render json: {}, status: 403
    end
  end

  protected
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end
end
