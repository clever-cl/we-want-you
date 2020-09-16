# frozen_string_literal: true

module SpotifyManager
  class Authenticator < ApplicationService
    def call
      result = HTTParty.post(spotify_auth_url, options)
    rescue HTTParty::Error => e
      OpenStruct.new({ success?: false, error: e })
    else
      handle_result(result)
    end

    private

    def spotify_auth_url
      ENV['SPOTIFY_AUTH_URL']
    end

    def options
      @options = {
        body: {
          grant_type: 'client_credentials'
        },
        basic_auth: auth_headers
      }
    end

    def auth_headers
      @auth_headers = {
        username: ENV['SPOTYFI_CLIENT_ID'],
        password: ENV['SPOTIFY_CLIENT_SECRET']
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
