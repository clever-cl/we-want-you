# frozen_string_literal: true

class Result < ApplicationRecord
  enum result_type: { album: 0, artist: 1 }

  validates :name, presence: true
  validates :query, presence: true
  validates :result_type, presence: true

  before_save :downcase_query

  scope :filter_by_query, ->(query) { where(query: query) }

  # TODO: Refactor method or move to service
  def self.search_and_save(query) # rubocop:disable Metrics/MethodLength
    return if query.blank?

    fetch_results = SpotifyManager::Searcher.call(query: query)
    if fetch_results.success?
      begin
        albums = fetch_results.payload[:albums]
        artists = fetch_results.payload[:artists]
        ActiveRecord::Base.transaction do
          albums&.dig(:items)&.each do |album|
            artists_names = album[:artists].map { |artist| artist[:name] }.join(', ')
            where(query: query, name: album[:name], artist: artists_names, result_type: 'album')
              .first_or_create!
          end

          artists&.dig(:items)&.each do |artist|
            where(query: query, name: artist[:name], popularity: artist[:popularity], result_type: 'artist')
              .first_or_create!
          end
        end
      rescue StandardError => e
        Rails.logger.debug(e)
      end
    else
      Rails.logger.debug(fetch_results.error)
    end
  end

  def downcase_query
    self.query = query.downcase
  end
end
