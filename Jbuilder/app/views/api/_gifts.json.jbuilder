# json.set! gift.id do
  json.extract! gift, :title, :description
  json.guest gift.guest, :name
# end
