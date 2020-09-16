# frozen_string_literal: true

class ResultsController < ApplicationController
  # GET /results
  def index
    # TODO: Add Pagination
    @query = query_params[:q]
    Result.search_and_save(@query)
    @results = @query.present? ? Result.filter_by_query(@query) : Result.all
  end

  private

  def query_params
    params.permit(:q)
  end
end
