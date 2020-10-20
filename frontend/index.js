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
        <a href="/pokemon.html?pokeID=${poke.id}">${poke.name}</a>
        <p>Type: ${poke.kind}</p>
        <p>Abilities: ${poke.abilities}</p>`).join(' ')
        
        pokedex.innerHTML = pokemonHTMLString;
    }
