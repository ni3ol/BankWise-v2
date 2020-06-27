# frozen_string_literal: true

10.times do |i|
  Bank.create(
    name: "Bank #{i + 1}",
    slogan: 'this is a slogan',
    image: 'image_url.png'
  )
end
