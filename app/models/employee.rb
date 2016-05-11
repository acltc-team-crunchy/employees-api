class Employee < ActiveRecord::Base
  has_many :addresses
end
