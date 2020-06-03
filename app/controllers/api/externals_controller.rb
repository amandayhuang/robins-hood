class Api::ExternalsController < ApplicationController
    
    def index
        displayName = params[:displayName]
        startDate = params[:startDate]
        keys = ['060db197a76147cea83f519ea566585c','b96d374f6b3245ebb9b1b0b36634a90a','516400c09b9a46b0abb9df2c7ca570a2','c0766a997e124d55a30b49353c094d7d','34c90171b7c542b78e7f8ff67b2744f1','8880d365c2d74af3a176aefd874464d9','b27cdde4a91144d09e04a27b8ac51cc2','0e797ff5745843f8873c16444b9b3430'];
        api_key = keys.sample;
    
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