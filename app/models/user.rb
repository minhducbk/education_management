class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :rememberable
  #  :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: { case_sensitive: false }

  has_many :user_sessions

  self.inheritance_column = :role

  def self.roles
    %w(Student Teacher)
  end

  def teacher?
    is_a? Teacher
  end
  def student?
    is_a? Student
  end
end
