class Bank
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :slogan, type: String
  field :image, type: String
end
