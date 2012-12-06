# == Schema Information
#
# Table name: zip_codes
#
#  id         :integer          not null, primary key
#  zip        :string(255)
#  lat        :float
#  long       :float
#  building   :string(255)
#  kwh        :float
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ZipCode < ActiveRecord::Base
end
