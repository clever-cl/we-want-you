# frozen_string_literal: true

require 'rails_helper'

RSpec.describe SpotifyManager::Searcher, type: :model do
  describe 'calling the object' do
    context 'with valid options' do
      # TODO: Stub API Call
      let!(:query) { 'ariana' }
      let!(:result) { SpotifyManager::Searcher.call(query: query) }

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

      it 'returns the albums found' do # rubocop:disable RSpec/MultipleExpectations, RSpec/ExampleLength
        expect(result.payload[:albums]).not_to be_empty
        expect(result.payload[:albums]).to be_an_instance_of(Hash)
        expect(result.payload[:albums][:items]).to be_an_instance_of(Array)
        names_include_query = result.payload[:albums][:items].all? do |album|
          album[:name].downcase.include?(query) ||
            album[:artists].any? { |artist| artist[:name].downcase.include?(query) }
        end
        expect(names_include_query).to be true
      end

      it 'returns the artists found' do # rubocop:disable RSpec/MultipleExpectations, RSpec/ExampleLength
        expect(result.payload[:artists]).not_to be_empty
        expect(result.payload[:artists]).to be_an_instance_of(Hash)
        expect(result.payload[:artists][:items]).to be_an_instance_of(Array)
        names_include_query = result.payload[:artists][:items].all? do |artist|
          artist[:name].downcase.include?(query)
        end
        expect(names_include_query).to be true
      end
    end
  end
end
