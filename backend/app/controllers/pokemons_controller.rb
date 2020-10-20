class PokemonsController < ApplicationController
    def index
        @pokemons = Pokemon.all
        render json: @pokemons
    end

    def show
        @pokemon = Pokemon.find(params[:id])
        render json: @pokemon
    end

    def create
        new_pokemon = Pokemon.create(
        name: params[:name],
        photo: params[:photo],
        type: params[:type],
        abilities: params[:abilities]
        )

        render json: new_pokemon
    end
    
end
