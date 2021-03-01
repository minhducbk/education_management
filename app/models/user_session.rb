class UserSession < ApplicationRecord
  belongs_to :user, required: true

  before_create :generate_token

  after_commit :update_sign_in_at

  LIMIT = 10

  def self.find_by_token_cache(session_token)
    session = Rails.cache.read("usersession-#{session_token}")
    unless session
      session = UserSession.find_by(token: session_token)
      Rails.cache.write("usersession-#{session_token}", session, expires_in: 30.minutes)
    end

    session
  end

  def self.destroy_session(session_token)
    # Deletes the session from the cache
    Rails.cache.delete("usersession-#{session_token}")
  end

  private

  def generate_token
    return if token.present?

    loop do
      self.token = Devise.friendly_token
      break token unless UserSession.where(token: token).exists?
    end
  end

  def remove_old_sessions
    sessions = user.user_sessions.order(created_at: :asc)
    size = sessions.size
    sessions.first(size - LIMIT).map(&:delete) if size > LIMIT
  end

  def update_sign_in_at
    if user.current_sign_in_at.nil? && user.last_sign_in_at.nil?
      user.update(current_sign_in_at: created_at)
    end
  end
end
