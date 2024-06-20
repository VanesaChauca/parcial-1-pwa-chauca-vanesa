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


const mostrarDetalle = (id) => {
    window.location.href = "detalle.html?id=" + id
}



//variables para la busqueda de los pokemon

const containerBusqueda = document.getElementById('containerBusqueda');
const formBusqueda = document.getElementById('formBusqueda');
const entradaBusqueda = document.getElementById('entradaBusqueda');

formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault();
    const datoBusqueda = entradaBusqueda.value.trim().toLowerCase();
    if (datoBusqueda) {
        buscarPokemon(datoBusqueda);
    }
});

async function buscarPokemon(datoBusqueda) {
    const response = await fetch(`${url_endPoint}/${datoBusqueda}`);
    if (response.ok) {
        const data = await response.json();
        mostrarPokemon([data]);
    } else {
        alert('No se encontró el Pokémon.');
        containerBusqueda.innerHTML = '<p>No se encontró el Pokémon.</p>';
    }
}

function mostrarPokemon(pokemons) {
    containerBusqueda.innerHTML = ''; // Limpia el contenedor de Pokémon antes de mostrar uno nuevo
    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.addEventListener('click', () => {
             mostrarDetalle(pokemon.id)
         });

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.front_default;
        sprite.alt = pokemon.name;

        const number = document.createElement('p');
        number.classList.add('num');
        number.innerText = `#${pokemon.id}`; 

        const name = document.createElement('p');
        name.textContent = pokemon.name;

        card.appendChild(sprite);
        card.appendChild(name);
        containerBusqueda.appendChild(card);
    });
}
