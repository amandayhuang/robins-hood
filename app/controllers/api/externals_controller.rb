class Api::ExternalsController < ApplicationController
    
    def index
        displayName = params[:displayName]
        startDate = params[:startDate]
        api_key = 'ec885fa30bfd47ea9ca9a19c922c974e';
    
        if displayName && startDate
            # get data for share price
            url = "http://newsapi.org/v2/everything?q=#{displayName}&from=#{startDate}&to=#{startDate}&sortBy=publishedAt&apiKey=#{api_key}"
            response = RestClient.get url
            json = JSON.parse response

            render json: json
        elsif displayName 
            # get articles for a displayName
            url = "http://newsapi.org/v2/everything?q=#{displayName}&sortBy=popularity&apiKey=#{api_key}"
            response = RestClient.get url
            json = JSON.parse response

            render json: json
        else
            # get entertainment articles
             url = "http://newsapi.org/v2/top-headlines?country=us&category=entertainment&sortBy=publishedAt&apiKey=#{api_key}"
             response = RestClient.get url
             json = JSON.parse response

             render json: json
        end
    end

end