const pokedex = document.getElementById('pokedex')

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(pokemonURL)
            .then(response => response.json())
        )
    }
    Promise.all(promises)
    .then(allPokemon => {
        const ourPokemon = allPokemon.map(pokemon => ({
            photo: pokemon.sprites['front_default'],
            name: pokemon.name,
            type: pokemon.types.map(type => type.type.name).join(', '),
            abilities: pokemon.abilities.map(ability => ability.ability.name).join(', '),
        }))
        displayPokemon(ourPokemon)
    })
}

fetchPokemon()

const displayPokemon = (pokemons) => {
    const pokemonHTMLString = pokemons.map(poke =>
        `
            <img src="${poke.photo}"/>
            <h2>${poke.name}</h2>
            <p>Type: ${poke.type}</p>
            <p>Abilities: ${poke.abilities}</p>
        `).join(' ')
        pokedex.innerHTML = pokemonHTMLString;
}
