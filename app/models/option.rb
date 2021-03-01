class Option < ApplicationRecord
  belongs_to :question

  validates :question, presence: true
  validates :name, length: { minimum: 1 }
  validates :description, length: { minimum: 1 }
end