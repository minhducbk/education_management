class Question < ApplicationRecord
  has_many :options
  belongs_to :test

  accepts_nested_attributes_for :questions, :allow_destroy => true

  validates :test, presence: true
  validates :name, length: { minimum: 1 }
  validates :description, length: { minimum: 1 }

  before_save :has_at_least_one_correct_option


  def has_at_least_one_correct_option
    return false if (self.options.count == 0 || self.options.select{|o| o.correct}.size == 0)
    true
  end
end