# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SpotifyManager::Authenticator, type: :model do
  describe 'calling the object' do
    context 'with valid options' do
      # TODO: Stub API Call
      let!(:result) { SpotifyManager::Authenticator.call }

      it 'returns an OpenStruct object' do
        expect(result).to be_an_instance_of(OpenStruct)
      end

      it 'responds to success? which is a boolean value' do
        expect(result).to respond_to(:success?)
        expect(result.success?).to be true
      end

      it 'responds to payload which is a Hash' do
        expect(result).to respond_to(:payload)
        expect(result.payload).to be_an_instance_of(Hash)
      end

      it 'returns the authentication token' do
        expect(result.payload[:access_token]).not_to be_empty
        expect(result.payload[:access_token]).to be_an_instance_of(String)
      end
    end
  end
end
