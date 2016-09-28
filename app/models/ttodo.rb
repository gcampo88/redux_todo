class Ttodo < ActiveRecord::Base
  validates :title, :body, presence: true
end
