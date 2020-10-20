# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'json'
require 'pry'

Pokemon.destroy_all


response = RestClient.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150")
parsed_response = JSON.parse(response)
pokemon = parsed_response["results"]
pokemon_array = []
pokemon.each do |poke|
    pokemon_array.push(name: poke["name"], info: JSON.parse(RestClient.get(poke["url"])))
end

new_pokemon = pokemon_array.map do |p|
    Pokemon.create(
        name: p[:name], 
        photo: p[:info]["sprites"]["front_default"],
        kind: p[:info]["types"][0]["type"]["name"],
        abilities: p[:info]["abilities"][0]["ability"]["name"]
    )
end