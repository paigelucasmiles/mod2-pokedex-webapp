const backendBaseURL = "http://localhost:3000/"
const pokemonURL = `${backendBaseURL}pokemons`

const pokedex = document.getElementById('pokedex')
const pokemonDisplay = document.getElementById('pokemon-container')

fetch(pokemonURL)
    .then(parseJSON)
    .then(pokemons => {
        createPokemonCards(pokemons)
    })

function parseJSON(pokemons) {
    return pokemons.json()
}

function createPokemonCards(pokemons) {
    pokemons.forEach(pokemon => {
        createPokemonCard(pokemon)
    })
}

function createPokemonCard(pokemon) {
    const pokePhoto = document.createElement('img')
    const pokeName = document.createElement('h2')

    pokePhoto.src = `${pokemon.photo}`
    pokeName.innerHTML = `<a href="/pokemon.html?pokeID=${pokemon.id}">${pokemon.name}</a>`

    pokedex.append(pokemonDisplay)
    pokemonDisplay.append(pokePhoto, pokeName)
    }
