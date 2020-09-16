# frozen_string_literal: true

class Result < ApplicationRecord
  enum result_type: { album: 0, artist: 1 }

  validates :name, presence: true
  validates :result_type, presence: true

  def self.search_and_save(query)
    return OpenStruct.new({ success?: true, payload: Result.all.order(name: :asc) }) if query.blank?

    fetch_results = SpotifyManager::Searcher.call(query: query)
    if fetch_results.success?
      results = []
      albums = fetch_results.payload[:albums]
      artists = fetch_results.payload[:artists]
      ActiveRecord::Base.transaction do
        albums&.dig(:items)&.each do |album|
          results << where(name: album[:name], result_type: 'album').first_or_create!
        end

        artists&.dig(:items)&.each do |artist|
          results << where(name: artist[:name], result_type: 'artist').first_or_create!
        end
      end
      OpenStruct.new({ success?: true, payload: results.sort_by!(&:name) })
    else
      OpenStruct.new({ success?: false, error: fetch_results.error })
    end
  end
end
