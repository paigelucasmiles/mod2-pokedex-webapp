const backendBaseURL = "http://localhost:3000/"
const pokemonURL = `${backendBaseURL}pokemons`

const pokedex = document.getElementById('pokedex')

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
    const pokemonCard = document.createElement('div')
    const pokePhoto = document.createElement('img')
    const pokeName = document.createElement('h2')

    pokemonCard.classList.add('pokemon-card')
    pokePhoto.src = `${pokemon.photo}`
    pokeName.innerHTML = `<a href="/pokemon.html?pokeID=${pokemon.id}">${pokemon.name}</a>`

    pokedex.append(pokemonCard)
    pokemonCard.append(pokePhoto, pokeName)
    }
