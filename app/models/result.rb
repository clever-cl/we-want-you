# frozen_string_literal: true

class Result < ApplicationRecord
  enum result_type: { album: 0, artist: 1 }

  validates :name, presence: true
  validates :result_type, presence: true
end
