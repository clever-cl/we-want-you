# frozen_string_literal: true

class ResultsController < ApplicationController
  # GET /results
  def index
    @results = Result.all
  end
end
