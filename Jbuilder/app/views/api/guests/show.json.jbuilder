json.partial! '/api/guest', guest: @guest
json.gifts @guest.gifts, :title, :description
