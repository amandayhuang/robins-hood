class Api::ExternalsController < ApplicationController
    
    def index
        displayName = params[:displayName]
        startDate = params[:startDate]
        news_api = News.new('060db197a76147cea83f519ea566585c');
        api_key = 'ec885fa30bfd47ea9ca9a19c922c974e';
        # debugger
        if displayName && startDate
            url = "http://newsapi.org/v2/everything?q=#{displayName}&from=#{startDate}&to=#{startDate}&sortBy=publishedAt&apiKey=#{api_key}"
            response = RestClient.get url
            json = JSON.parse response
            # debugger
            render json: json
        elsif displayName 
            url = "http://newsapi.org/v2/everything?q=#{displayName}&sortBy=popularity&apiKey=#{api_key}"
            response = RestClient.get url
            json = JSON.parse response

            render json: json
        else
            # news = news_api.get_top_headlines(category:'entertainment', country:'us')
             url = "http://newsapi.org/v2/top-headlines?country=us&category=entertainment&sortBy=publishedAt&apiKey=#{api_key}"
             response = RestClient.get url
             json = JSON.parse response

             render json: json
        end
    end

end