const pokemonURL = 'http://localhost:3000/pokemons'
const pokeQueryParams = new URLSearchParams(window.location.search)
const pokeID = pokeQueryParams.get("pokeID")
const pokeDiv = document.querySelector('#poke-info')

fetch(`${pokemonURL}/${pokeID}`)
    .then(response => response.json())
    .then(pokemon => {
        displayPokemon(pokemon)
    })


    function displayPokemon(pokemon) {
        const pokemonName = document.createElement('h1');
        const pokemonPhoto = document.createElement('img');
        const pokemonType = document.createElement('p');
        const pokemonAbility = document.createElement('p');

        pokemonName.classList.add('pokename')
        
        pokemonName.textContent = `${pokemon.name}`
        pokemonPhoto.src = `${pokemon.photo}`
        pokemonType.textContent = `Type: ${pokemon.kind}`
        pokemonAbility.textContent = `Ability: ${pokemon.abilities}`
            
        pokeDiv.append(pokemonName, pokemonPhoto, pokemonType, pokemonAbility);
        }
    