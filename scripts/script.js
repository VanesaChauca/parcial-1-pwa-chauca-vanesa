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

    const spriteContainer =document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p')
    number.classList.add('num')
    number.innerText = `#${pokemon.id.toString().padStart(3, 0)}`; 

    const name =document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card)
    console.log(pokemonContainer)

}