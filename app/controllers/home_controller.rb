class HomeController < ApplicationController
  def index
  end
  def graph
    zipcodes = ZipCode.all
    render :json => zipcodes
  end

  def map

  end
end