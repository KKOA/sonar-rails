require 'httparty'
require 'json'

# Home controller
class HomeController < ApplicationController
  def index; end

  def search
    url = 'http://index1.homeflow.co.uk/properties?'
    params.each do |key, value|
      value.strip!
    end
    query= {}
    query[:api_key] ="api_key=#{ENV['HOMEFLOW_KEY']}" # api_key
    query[:channel] = "[search][channel]=#{params[:channel]}"
    query[:address] = "[search][address]=#{params[:location]}"
    query[:min_bedrooms] = "[search][min_bedrooms]=#{params[:min_bedrooms]}"
    if params[:max_bedrooms].length > 0
      query[:max_bedrooms] = "[search][max_bedrooms]=#{params[:max_bedrooms]}"
    end
    puts query
    query_parameters = query.values.join("&")
    url = url + query_parameters
    puts url
    response = HTTParty.get(url)
    # response = HTTParty.get(url).parsed_response
    # puts response.code
    # if response.code == 500
    #   render json: { error: 'some text'}
    # else
    puts response.code
      response = response.parsed_response
      render json: response['result']['properties']['elements']
    # end
  end

  def show
    puts params
    url = 'http://index1.homeflow.co.uk/properties/'+params[:id]+'?'
    api_key="api_key=#{ENV['HOMEFLOW_KEY']}"
    url = url + api_key
    response = HTTParty.get(url)
    response = response.parsed_response
    render json: response['result']['property']
    # http://index1.homeflow.co.uk/properties/11128626?api_key=77467477edfd2689cd77796a2c4b019f
  end
end
