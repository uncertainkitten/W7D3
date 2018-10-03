json.array! @gifts do |gift|
  json.partial! '/api/gifts', gift: gift
end
