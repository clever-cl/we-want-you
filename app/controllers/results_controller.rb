# frozen_string_literal: true

class ResultsController < ApplicationController
  def index
    @results = Result.all
  end
end
