# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Result', type: :request do
  describe 'index' do
    before { get '/results' }

    it 'should be ok' do
      expect(response).to be_successful
    end
  end
end
