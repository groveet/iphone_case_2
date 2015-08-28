class Item < ActiveRecord::Base
	belongs_to :category
	has_attached_file :image, 
					  :styles => { medium: "500x500>", thumb: "200x200>" },
					  :bucket => 'rails-iphone-case'
    validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
