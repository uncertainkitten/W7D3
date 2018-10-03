json.extract! @party, :name, :location

json.guests @party.guests.each do |guest|
  json.set! :name, guest.name
  json.gifts guest.gifts, :title, :description
end
