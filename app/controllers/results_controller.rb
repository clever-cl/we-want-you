# frozen_string_literal: true

class ResultsController < ApplicationController
  # GET /results
  def index
    @query = params[:q].present? ? query_params[:q] : ''
    @search = Result.search_and_save(@query)
    if @search.success?
      @results = @search.payload
    else
      @error = @search.error
    end
  end

  private

  def query_params
    params.permit(:q)
  end
end
