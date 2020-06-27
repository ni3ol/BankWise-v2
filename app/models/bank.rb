class Bank
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :slogan, type: String
  field :image, type: String

  validates :name, presence: true
  validates :slogan, presence: true
  validates :image, presence: true
end
