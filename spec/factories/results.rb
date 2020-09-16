# frozen_string_literal: true

FactoryBot.define do
  factory :result do
    artist { Faker::Games::Zelda.character }
    name { Faker::Name.first_name }
    popularity { Faker::Number.between(from: 1, to: 100) }
    query { Faker::Games::Zelda.game }
    result_type { Result.result_types.keys.sample }
  end
end
