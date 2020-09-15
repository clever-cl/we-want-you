# frozen_string_literal: true

Rails.application.routes.draw do
  root 'results#index'
  resources :results, only: %i[index]
end
