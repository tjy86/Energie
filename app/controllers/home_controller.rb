class HomeController < ApplicationController
  def index
  end
  def data
    html = HTTParty.get('http://data.cityofnewyork.us/api/views/74cu-ncm4/rows.json')
    json = JSON(html.body)

    json['data'].each do |x|
      z = ZipCode.new
      z.zip = x[8][0].split('"')[-2] if x[8][0].present?
      z.lat = x[8][1]
      z.long = x[8][2]
      z.building = x[11]
      z.kwh = x[10]
      z.save
    end
    binding.pry
  end
end