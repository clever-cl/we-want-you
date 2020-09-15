# frozen_string_literal: true

FactoryBot.define do
  factory :result do
    name { Faker::Name.first_name }
    result_type { Result.result_types.keys.sample }
  end
end
