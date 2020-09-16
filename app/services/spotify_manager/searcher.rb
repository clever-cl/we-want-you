# frozen_string_literal: true

module SpotifyManager
  class Searcher < ApplicationService
    SEARCH_TYPE = 'album,artist'

    attr_reader :query

    def initialize(params)
      @query = params[:query]
    end

    def call
      @auth = SpotifyManager::Authenticator.call
      if @auth.success?
        begin
          result = HTTParty.get(spotify_search_url, options)
        rescue HTTParty::Error => e
          OpenStruct.new({ success?: false, error: e })
        else
          handle_result(result)
        end
      else
        OpenStruc.new({ success?: false, error: @auth.error })
      end
    end

    private

    def spotify_search_url
      ENV['SPOTIFY_SEARCH_URL']
    end

    def options
      @options = {
        headers: auth_headers,
        query:   {
          q:    query,
          type: SEARCH_TYPE
        }
      }
    end

    def auth_headers
      {
        "Authorization": "Bearer #{@auth.payload[:access_token]}"
      }
    end

    def handle_result(result)
      parsed_result = JSON.parse(result.body, symbolize_names: true)
      if result.success?
        OpenStruct.new({ success?: true, payload: parsed_result })
      else
        OpenStruct.new({ success?: false, error: parsed_result[:error] })
      end
    end
  end
end
