require 'httparty'
require 'json'

# Home controller
class HomeController < ApplicationController
  def index; end

  def search
    url = 'http://index1.homeflow.co.uk/properties?'
    api_key = "api_key=#{ENV['HOMEFLOW_KEY']}"
    channel = "[search][channel]=#{params[:channel]}"
    address = "[search][address]=#{params[:location]}"
    min_bedrooms = "[search][min_bedrooms]=#{params[:min_bedrooms]}"
    max_bedrooms = "[search][max_bedrooms]=#{params[:max_bedrooms]}"

    parts = [
      url, api_key, channel,
      address,
      min_bedrooms, max_bedrooms
    ]
    newurl = parts.join('&')
    puts '', 'New url :' + newurl, ''
    response = HTTParty.get(newurl).parsed_response
    render json: response['result']['properties']['elements']
  end
end
