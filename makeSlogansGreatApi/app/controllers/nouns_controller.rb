class NounsController < ApplicationController

  def index
    @nouns = Noun.all

    render json: @nouns
  end

end
