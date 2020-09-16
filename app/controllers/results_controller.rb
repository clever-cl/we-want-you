# frozen_string_literal: true

class ResultsController < ApplicationController
  # GET /results
  def index
    @query = params[:q].present? ? query_params[:q] : ''
    @search = Result.search_and_save(@query)
    @results = @search.payload if @search.success?
  end

  private

  def query_params
    params.permit(:q)
  end
end
