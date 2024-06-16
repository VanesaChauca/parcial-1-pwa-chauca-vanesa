const url_endPoint = 'https://pokeapi.co/api/v2/pokemon';

const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((result) => result.json())
    .then((data) => {
        cardPokemon(data);
    });
}

function fetchPokemones(listaPokemons){
    for(let i = 1; i <= listaPokemons; i++) {
        fetchPokemon(i);
    }
}

fetchPokemones(100);

function cardPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    card.addEventListener('click', () => {
        mostrarDetalle(pokemon.id)
    })
}