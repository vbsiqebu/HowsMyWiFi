object false

child @place, object_root: false do

  attributes :address, :name, :price, :id
  node :href do |place|
    location_url(place)
  end

end

child @score, object_root: false do

  attributes :latency, :bandwidth, :tested_at, :id

  node :href do |score|
    score_url(score)
  end

end