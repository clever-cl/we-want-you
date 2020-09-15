# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SpotifyManager::Authenticator, type: :model do
  describe 'calling the object' do
    let!(:result) { SpotifyManager::Authenticator.call }

    it 'returns an OpenStruct object' do
      expect(result).to be_an_instance_of(OpenStruct)
    end

    it 'responds to success? which is a boolean value' do
      expect(result).to respond_to(:success?)
      expect(result.success?).to be_in([true, false])
    end

    it 'responds to payload' do
      expect(result).to respond_to(:payload)
    end
  end
end
