# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Searching an album or artists', type: :feature do
  context 'with a valid input' do
    it 'shows the albums and artists found' do
      visit root_path
      fill_in 'q', with: 'ariana'
      click_on 'Search'
      expect(page).to have_content('grande')
    end
  end
end
