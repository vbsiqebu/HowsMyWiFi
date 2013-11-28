class ResultsController < ApplicationController
 
  def index
    @place = if params[:id]
      Location.where('id in (?)', params[:id].split(','))
    else
      Location.all
    end

    @score = if params[:id]
      Score.where('id in (?)', params[:id].split(','))
    else
      Score.all
    end


  end

  def create
    new_attributes = {address: params[:place][:address], price: params[:place][:price]}
    find_attributes = {name: params[:place][:name]}
    place = Location.create_with(new_attributes).find_or_create_by(find_attributes)

    new_attributes_score = {bandwidth: params[:score][:bandwidth], tested_at: params[:score][:tested_at]}
    find_attributes_score = {latency: params[:score][:latency]}
    score = Score.create_with(new_attributes_score).find_or_create_by(find_attributes_score)

    if place.save && score.save
      head :created, location_url: location_url(place), score_url: score_url(score)
    else
      head :unprocessable_entity
    end
  end
end
