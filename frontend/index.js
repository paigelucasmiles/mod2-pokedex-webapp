const backendBaseURL = "http://localhost:3000/"
const pokemonURL = `${backendBaseURL}pokemons`

const pokedex = document.getElementById('pokedex')

fetch(pokemonURL)
    .then(parseJSON)
    .then(displayPokemon)

function parseJSON(pokemons) {
    return pokemons.json()
}

function displayPokemon(pokemons) {
    const pokemonHTMLString = pokemons.map(poke =>
        `

        <img src="${poke.photo}"/>
        <p>${poke.id}<p>
        <h2>${poke.name}</h2>
        <p>Type: ${poke.kind}</p>
        <p>Abilities: ${poke.abilities}</p>`).join(' ')
        
        pokedex.innerHTML = pokemonHTMLString;
    }
